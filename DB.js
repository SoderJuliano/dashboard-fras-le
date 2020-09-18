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

function makeTable(dia, turno){ 
 var db = openDatabase("Prensas", "1.0", "Prensas Siblo Web SQL Database", 200000*1024); 
db.transaction(function(transaction){
    transaction.executeSql(
        "SELECT * FROM Producao WHERE dia = ?",
        [dia],
        function(transaction, result){
            console.log('deu certo!'); 
            console.log(result);
           for(var i = 0; i < result.rows.length; i++){
			   console.log(result.rows.item(i)['maquina']);
			   // jquery
                    if(result.rows.item(i).turno == turno){
                                $("#title-dashboard").text("Producao de hoje do turno "+turno);
                        	    $( "#table-data" ).append( "<tr>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).maquina+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).meta+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).telhas_produzidas+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).pecas_produzidas+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).kg+"kg</td>" );
								$( "#table-data" ).append( "</tr>" );
                    }else{
                                $("#title-dashboard").text("Producao do turno "+getLastTurno());
                                $( "#table-data" ).append( "<tr>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).maquina+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).meta+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).telhas_produzidas+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).pecas_produzidas+"</td>" );
								$( "#table-data" ).append( "<td>"+result.rows.item(i).kg+"kg</td>" );
								$( "#table-data" ).append( "</tr>" );
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
    const dia = parseInt(d[0])-i;
    const mes = d[1];
    const ano = d[2]; 
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
                  console.log(results.rows.item(i).dia);
			      soma += parseInt(results.rows.item(i).telhas_produzidas);
                } 
                datas.push(dataMenos(dia, x));
                retorno.push(soma);
             }, null); 
    } 
    if(tipo=='bar'){
        setGraph2(datas, retorno); 
    }else{
        setGraph(datas, retorno);
    }
});
}