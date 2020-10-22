function openDataBase(){

// o método OpenDatabase precisa de 4 parametros; o nome do banco de dados, a versão, a descrição e o tamanho estimado (em bytes)
var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
 
// deverá mostrar "Database"
console.log(db);
 
// de qualquer forma, sempre teste que o objeto foi instanciado direito antes de usá-lo
if(!db){
    alert('deu erro!');
}
}
function bancoSetParadas(v, t,d,m, h, dc){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Paradas (vao, turno, dia, maquina, hora, descricao)');
            tx.executeSql('INSERT INTO Paradas (vao, turno, dia, maquina, hora, descricao) VALUES (?, ?, ?, ?, ?, ?)', [v,t,d,m,h,dc]); 
});
}
function upDateParadas(v, t,d,m, h, dc){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
    db.transaction(function (tx) {
       tx.executeSql("UPDATE Paradas SET descricao='"+dc+"', hora='"+h+"' WHERE turno=? AND vao=? AND dia=? AND maquina=? ", [v,t,d,m]); 
    });
}
function setProducao(t,v,d,m, mt, tlhs,pcs,kg){ // turno vao dia maquina meta telhas peças kg material usado
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg)');
            tx.executeSql('INSERT INTO Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [v,t,d,m, mt, tlhs,pcs,kg]); 
});
}
function upDateProducao(t,v,d,m, mt, tlhs,pcs,kg){ // turno vao dia maquina meta telhas peças kg material usado
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
    db.transaction(function (tx) {
       tx.executeSql("UPDATE Producao SET meta='"+mt+"', telhas_produzidas='"+tlhs+"', pecas_produzidas='"+pcs+"', kg='"+kg+"' WHERE turno=? AND vao=? AND dia=? AND maquina=? ", [t,v,d,m]);
    });
}
function derrubarTabela(tabela){ alert("derrubou "+tabela);
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE '+tabela+';');
});
}
function verificarProducaoDiaTurno(dia, vao, turno){
     var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg)');
          tx.executeSql('SELECT * FROM Producao WHERE vao = ? AND turno = ? AND dia = ?', [vao, turno, dia], function (tx, results) { 
            var len = results.rows.length;
			if(len>1){
				localStorage.setItem('adicionado' , getTurno()+''+getVao()+''+getData());
			}
});
});}
var status = 0;
function consultarDados(dia, vao){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg)');
          tx.executeSql('SELECT * FROM Producao WHERE vao = ?', [vao], function (tx, results) { 
            var len = results.rows.length, i;
            var msg = "";
            var valor = 0;
			let array = [];
            for (i = 0; i < len; i++){
              // alert(results.rows.item(i).dia );
			  array.push(results.rows.item(i).dia);
			  if(array[i-1]!="undefined" && array.length>0 && array[i-1]!=array[i]){ //alert('anerior '+array[i-1]+' atual '+array[i] );
				  msg += ";"+array[i];
			  }else if(array.length==0){
				  msg += array[i];
			  }
            } 
			 localStorage.setItem('dbDatas', msg);
         }, null);
		tx.executeSql('SELECT * FROM Producao WHERE  dia =  ? AND turno = ? AND vao = ?', [dia, 2, vao], function (tx, results) { 
            var len = results.rows.length, i;
            var msg = '';
            var valor = 0;
            for (i = 0; i < len; i++){
               if(results.rows.item(i).telhas_produzidas!='NaN' && results.rows.item(i).telhas_produzidas!=''){
                valor += parseFloat(results.rows.item(i).telhas_produzidas);
               }
            } /* document.querySelector('#turno2').innerHTML +=  valor;*/ 
			localStorage.setItem('t2', valor);
         }, null); 
         tx.executeSql('SELECT * FROM Producao WHERE  dia =  ? AND turno = ? AND vao = ?', [dia, 3, vao], function (tx, results) { 
            var len = results.rows.length, i;
            var msg = '';
            var valor = 0;
            for (i = 0; i < len; i++){
              // alert(results.rows.item(i).maquina );
               //msg = "<p>"+results.rows.item(i).meta+"</p>";
               if(results.rows.item(i).telhas_produzidas!='NaN' && results.rows.item(i).telhas_produzidas!=''){
                valor += parseFloat(results.rows.item(i).telhas_produzidas);
               }
            }  /*document.querySelector('#turno3').innerHTML +=  valor;*/ localStorage.setItem('t3', valor);
            
         }, null); 
         tx.executeSql('SELECT * FROM Producao WHERE  dia =  ? AND turno = ? AND vao = ?', [dia, 1, vao], function (tx, results) { 
            var len = results.rows.length, i;
            var msg = '';
            var valor = 0;
            for (i = 0; i < len; i++){
              // alert(results.rows.item(i).maquina );
              // msg = "<p>"+results.rows.item(i).meta+"</p>";
               if(results.rows.item(i).telhas_produzidas!='NaN' && results.rows.item(i).telhas_produzidas!=''){
                valor += parseFloat(results.rows.item(i).telhas_produzidas);
               }
            }  /*document.querySelector('#turno1').innerHTML +=  valor;*/ localStorage.setItem('t1', valor);
         }, null); 
    }); //makeGraph2(localStorage.getItem('t1'),localStorage.getItem('t2'),localStorage.getItem('t3'));
}
function getStatus(){
    return this.status;
}

function makeTable(turno){ 
 var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
db.transaction(function(transaction){
    transaction.executeSql(
        "SELECT * FROM Producao WHERE turno = ? AND vao = ?",
        [turno, getVao()],
        function(transaction, result){
            console.log('deu certo!'); 
           // console.log(result);
		   let cont = 0;
		   let somaMetas = 0;
		   let somaResultados = 0;
           for(var i = result.rows.length-1; i >= 0; i--){
                $("#title-dashboard").text("Produção turno "+turno+" vão "+getVao());
                $( ".table-data" ).append( "<tr>" );
				$( ".table-data" ).append( "<td class='tr"+result.rows.item(i).turno+"'>"+result.rows.item(i).turno+"</td>");
                $( ".table-data" ).append( "<td>"+result.rows.item(i).dia+"</td>");
				$( ".table-data" ).append( "<td>"+result.rows.item(i).maquina+"</td>" );
				$( ".table-data" ).append( "<td>"+result.rows.item(i).meta+"</td>" );
				if(parseInt(result.rows.item(i).meta)>0){
					somaMetas += parseInt(result.rows.item(i).meta);
				}else{
					somaMetas += 0;
				}
				somaResultados += parseInt(result.rows.item(i).telhas_produzidas);
				$( ".table-data" ).append( "<td>"+result.rows.item(i).telhas_produzidas+"</td>" );
				$( ".table-data" ).append( "<td>"+result.rows.item(i).pecas_produzidas+"</td>" );
				$( ".table-data" ).append( "<td>"+result.rows.item(i).kg+"kg</td>" );
				$( ".table-data" ).append( "</tr>" );
                if(cont==15){
					$( ".table-data" ).append( "<tr>" );
					$( ".table-data" ).append( "<td>"+result.rows.item(i).dia+"<td>" );
					$( ".table-data" ).append( "<td>meta:"+somaMetas+"T<td>" );
					$( ".table-data" ).append( "<td>resultado:"+somaResultados+"T<td>" );
					
					$( ".table-data" ).append( "</tr>" );
					cont=0;
					somaMetas=0;
					somaResultados=0;
				}else{
					cont++;
				}
           }
        },
        function(transaction, error){
            console.log('deu pau!');
            console.log(error);
        }
    );
});
}
function getLastTurno(){
    if((getTurno()-1)<=0){
        return 3;
    }else{
    return getTurno()-1; 
    }
}
function dataMenos(data, i){
    let d = data.split("/");
    let dia = parseInt(d[0])-i;
    const mes = d[1];
    const ano = d[2]; 
    switch (dia) {
        case 0:
            dia = 31;
          break;
        case -1:
            dia = 30;
          break;
        case -2:
            dia = 29;
          break;
        case -3:
            dia = 28;
          break;
        case -4:
            dia = 27;
          break;
        case -5:
            dia = 26;
          break;
        case  -6:
            dia = 25;
      }
    return dia+"/"+mes+"/"+ano; 
}
function mudarPadraoData(data){
let d = data.split("/");
const dia = d[0];
const mes = d[1];
const ano = d[2];
return mes+"/"+dia+"/"+ano;
}
function getTelhas(dia, vao, turno, tipo){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
    db.transaction(function (tx) {
    let retorno =[];
    let datas = [];
        for(let x = 0; x<7; x++ ){ 
            let soma = 0;
            tx.executeSql('CREATE TABLE IF NOT EXISTS Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg)');
              tx.executeSql('SELECT * FROM Producao WHERE vao = ? AND turno=? AND dia=?', [vao, turno, dataMenos(dia, x)], function (tx, results) { 
                var len = results.rows.length, i;
			     for (i = 0; i < len; i++){
                  //console.log(results.rows.item(i).dia);
			      soma += parseInt(results.rows.item(i).telhas_produzidas);
                } 
                datas.push(dataMenos(dia, x));
                retorno.push(soma);
             }, null); 
    } 
        setGraph2(datas, retorno); 
        setGraph(datas, retorno);
});
}
function producaoExiste(dia, vao, turno){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
    db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Producao (vao, turno, dia, maquina, meta, telhas_produzidas, pecas_produzidas, kg)');
              tx.executeSql('SELECT * FROM Producao WHERE vao = ? AND turno=? AND dia=?', [vao, turno, dia], function (tx, results) { 
                var len = results.rows.length;
			     if (len>0){
                    localStorage.setItem("producaoDiaExiste", "Sim");
                 }else{
                    localStorage.setItem("producaoDiaExiste", "Nao");
                 } 
             }, null);
   
});
}
function todatabela(){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
db.transaction(function(transaction){
    transaction.executeSql(
        "SELECT * FROM Producao",[],
        function(transaction, result){
            console.log('deu certo!'); 
			let tabela = "";
			$("#title-dashboard").text("todo Banco de Dados");
			tabela += "<table class='table table-striped table-sm'><thead><tr>";
			tabela += "<th>Turnos</th><th>Data</th><th>Prensa</th><th>Meta</th><th>Realizado em telhas</th><th>Em peças</th><th>Material gasto</th>";
			tabela += "</tr></thead>";
			tabela += "<tbody>";
           for(var i = 0; i < result.rows.length; i++){
               //console.log(result.rows.item(i)['maquina']);
			   // jquery
			   /* <table class="table table-striped table-sm">
          <thead>
            <tr>
			  <th>Turno</th>
              <th>Data</th>
              <th>Prensa</th>
              <th>Meta</th>
              <th>Realizado em telhas</th>
              <th>Em peças</th>
              <th>Material gasto</th>
            </tr>
          </thead>
		  <tbody class="table-data">
          </tbody>*/
								
                                
									 tabela += "<tr>";
									 tabela += "<td class='tr"+result.rows.item(i).turno+"'>"+result.rows.item(i).turno+"</td>";
									 tabela += "<td>"+result.rows.item(i).dia+"</td>";
									 tabela += "<td>"+result.rows.item(i).maquina+"</td>";
									 tabela += "<td>"+result.rows.item(i).meta+"</td>";
									 tabela += "<td>"+result.rows.item(i).telhas_produzidas+"</td>";
									 tabela += "<td>"+result.rows.item(i).pecas_produzidas+"</td>";
									 tabela += "<td>"+result.rows.item(i).kg+"kg</td>";
									 tabela += "</tr>";
           }
		   tabela += "</tbody></table>"; 
		   $("#tabela").html(tabela);
		   trColor();
        },
        function(transaction, error){
            console.log('deu pau!');
            console.log(error);
        }
    );
});
}
function eficienciaTurnos(){ 
    var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
db.transaction(function(transaction){
    transaction.executeSql(
        "SELECT * FROM Producao",[],
        function(transaction, result){
            console.log('deu certo!'); 

            let metas = [0,0,0];
            let atingido = [0,0,0];
            let t1eficiencia = 0;
            let t2eficiencia = 0;
            let t3eficiencia = 0;

           for(var i = 0; i < result.rows.length; i++){
               console.log(result.rows.item(i)['maquina']);
               if(result.rows.item(i).turno==1){
                if(result.rows.item(i).meta=='' || result.rows.item(i).meta==null || result.rows.item(i).meta=='undefined'){
                    metas[0] += 0;
                   }else{
                    metas[0] += parseInt(result.rows.item(i).meta);
                   }
                   if(result.rows.item(i).telhas_produzidas=='' || result.rows.item(i).telhas_produzidas==null || result.rows.item(i).telhas_produzidas=='undefined'){
                    atingido[0] += 0;
                }else{
                    atingido[0] += parseInt(result.rows.item(i).telhas_produzidas);
                }
               }else if(result.rows.item(i).turno==2){
                   if(result.rows.item(i).meta=='' || result.rows.item(i).meta==null || result.rows.item(i).meta=='undefined'){
                    metas[1] += 0;
                   }else{
                    metas[1] += parseInt(result.rows.item(i).meta);
                   }
                    if(result.rows.item(i).telhas_produzidas=='' || result.rows.item(i).telhas_produzidas==null || result.rows.item(i).telhas_produzidas=='undefined'){
                        atingido[1] += 0;
                    }else{
                        atingido[1] += parseInt(result.rows.item(i).telhas_produzidas);
                    }
               }else if(result.rows.item(i).turno==3){
                if(result.rows.item(i).meta=='' || result.rows.item(i).meta==null || result.rows.item(i).meta=='undefined'){
                    metas[2] += 0;
                   }else{
                    metas[2] += parseInt(result.rows.item(i).meta);
                   }
                   if(result.rows.item(i).telhas_produzidas=='' || result.rows.item(i).telhas_produzidas==null || result.rows.item(i).telhas_produzidas=='undefined'){
                    atingido[2] += 0;
                }else{
                    atingido[2] += parseInt(result.rows.item(i).telhas_produzidas);
                } //console.log('t3 '+metas[2]);
               }
           }
           t1eficiencia = parseInt((atingido[0]/metas[0])*100);
           t2eficiencia = parseInt((atingido[1]/metas[1])*100);
           t3eficiencia = parseInt((atingido[2]/metas[2])*100);
           const data = [t1eficiencia,t2eficiencia,t3eficiencia];
           
            graphPizza(data);
            $("#myChartPizza").fadeIn();
        },
        function(transaction, error){
            console.log('deu pau!');
            console.log(error);
        }
    );
});
}
function paradasDiaDesempenho(dia){
	var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
	db.transaction(function(transaction){
    transaction.executeSql(
        "SELECT * FROM Paradas WHERE dia=?",[dia],
        function(transaction, result){
            console.log('consulta realizada!'); 
			let nulos = 0;
			let outros = 0;
			let mParadas = [];
			let tabela = "";
			$("#title-dashboard").text("Relatório de paradas");
			tabela += "<table class='table table-striped table-sm'><thead><tr>";
			tabela += "<th>Turnos</th><th>Data</th><th>Prensa</th><th>parada</th><th>hora</th><th>perda/%/parada</th><th>perda em telhas/paradas</th>";
			tabela += "</tr></thead>";
			tabela += "<tbody>";
			let iFim = 0;
           for(var i = 0; i < result.rows.length; i++){
            let x = result.rows.item(i).descricao.split("//");
			let y = result.rows.item(i).hora.split("//");
			if(x.length>1){
				$.each(x, function(index, value){
					outros++;
					if(!mParadas.includes(result.rows.item(i).maquina)){
						mParadas.push(result.rows.item(i).maquina);
					}
					tabela += "<tr>";
					tabela += "<td class='tr"+result.rows.item(i).turno+"'>"+result.rows.item(i).turno+"</td>";
					tabela += "<td>"+result.rows.item(i).dia+"</td>";
					tabela += "<td>"+result.rows.item(i).maquina+"</td>";
					tabela += "<td>"+value+"</td>";
					tabela += "<td>"+y[index]+"</td>";
					tabela += "<td id='perdaIrog'>0</td>";
					tabela += "<td id='perdaTelhas'>0</td>";
				});
			}else{
				if(result.rows.item(i).descricao == "nulo"){
					nulos++;
				}else{
					outros++;
					if(!mParadas.includes(result.rows.item(i).maquina)){
						mParadas.push(result.rows.item(i).maquina);
					}
				}
				tabela += "<tr>";
				tabela += "<td class='tr"+result.rows.item(i).turno+"'>"+result.rows.item(i).turno+"</td>";
				tabela += "<td>"+result.rows.item(i).dia+"</td>";
				tabela += "<td>"+result.rows.item(i).maquina+"</td>";
				if(result.rows.item(i).descricao=="nulo"){
					tabela += "<td></td>";
				}else{
					tabela += "<td>"+result.rows.item(i).descricao+"</td>";
				}
				if(result.rows.item(i).hora=="nulo"){
					tabela += "<td></td>";
				}else{
					tabela += "<td>"+result.rows.item(i).hora+"</td>";
				}
				tabela += "<td id='perdaIrog'>0</td>";
				tabela += "<td id='perdaTelhas'>0</td>";
			}					
			tabela += "</tr>";
			if(iFim==15){
				tabela += "<tr class='trfim'><td class='trfim1' colspan='2'>total de paradas -> "+outros+"</td><td class='trfim' colspan='2'>não pararam -> "+nulos+"</td><td>pararam -> "+mParadas.length+"</td></tr>";
				iFim=0;
			}else{
				iFim++;
			}
           }
		   tabela += "</tbody></table>"; 
		   $("#tabela").html(tabela);
		   trColor();
        },
        function(transaction, error){
            console.log('deu pau!');
            console.log(error);
        }
    );
});
}