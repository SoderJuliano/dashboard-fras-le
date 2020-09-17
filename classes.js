/*var listaMaquinas3txt = ['cT1019', 'cT1407', 'cT1408', 'cT1409', 'cT1410', 'cT1552', 'cT1553', 'cT8833',
	'cT8888', 'cT8916', 'cT8917', 'cT10178', 'cT11819', 'cT11820', 'cT12342', 'cT12343'];
var listaMaquinas2txt = ["cT1548", "cT1549", "cT1620", "cT1621", "cT1635", "cT1825", "cT1684", "cT1686", "cT1855", "cT1857", "cT1877", "cT1878", "cT1906", "cT1907",
	"cT10552", "cT11818"];
var listaMaquinasOptxt3 = ['op1019', 'op1407', 'op1408', 'op1409', 'op1410', 'op1552', 'op1553', 'op8833',
	'op8888', 'op8916', 'op8917', 'op10178', 'op11819', 'op11820', 'op12342', 'op12343'];*/
var listaMaquinasNull = ["maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina",
			"maquina", "maquina", "maquina", "maquina", "maquina"];
			
			
		var listaMaquinas3 = ["1019", "1407", "1408", "1409", "1410", "1552", "1553", "8833",
			"8888", "8916", "8917", "10178", "11819", "11820", "12342", "12343"];
		
		var listaMaquinas2 = ["1548", "1549", "1620","1621","1635","1684","1686","1825","1855", "1857","1877","1878",  "1906","1907",
			"10552", "11818"];
		var listaMaquinasNull = ["maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina", "maquina",
			"maquina", "maquina", "maquina", "maquina", "maquina"];
			
			//conjunto de matrizes da empresa....elas não mudam de numeração
		/*var matrizes = [ ffr020479=["02/0479", "FD/87-F"], ffr020573=["02/0573", "4707-G"],
			ffr020572=["02/0572", "4707-F"], ffr100000013687=["13687", "4711-F"], ffr020428=["02/0428", "4515-G"],
			ffr020627=["02/0627", "4709"], ffr020427=["02/0427", "4515-F"], ffr020548=["02/0548", "4718-F"],
			ffr020430=["02/0430", "CA/32-F"], ffr020431=["02/0431","CA/32-G"], ffr020450=["02/0450", "2240"],
			ffr100000013692=["13692", "4711-G"], ffr020436=["02/0436","BC/37"], ffr020612=["02/0612", "MB/188"],
			ffr020549=["02/0549", "4718-G"], ffr020466=["02/0466", "MB/185"], ffr020548=["02/0548", "4718-F"], ffr100000013691=["164291", "4719"]
		];*/
		var preVao3 = ["15641", "9562", "1579", "9493", "1580", "10013", "10052", "5039", "5040", "9026", "9082",
			"10179", "11703", "11748", "9734", "9769"];
		var preVao2 = ["1587", "1628", "1882", "1588", "11202", "10094", "1636","11203", "1622", "1599", "1881",
			"1879", "1660", "1585", "10180", "11519"];	
			
			
			
var matrizes = [ ffr020479=["02/0479", "FD/87-F"], ffr020573=["02/0573", "4707-G"],
			ffr020572=["02/0572", "4707-F"], ffr100000013687=["13687", "4711-F"], ffr020428=["02/0428", "4515-G"],
			ffr020627=["02/0627", "4709"], ffr020427=["02/0427", "4515-F"], ffr020548=["02/0548", "4718-F"],
			ffr020430=["02/0430", "CA/32-F"], ffr020431=["02/0431","CA/32-G"], ffr020450=["02/0450", "2240"],
			ffr100000013692=["13692", "4711-G"], ffr020436=["02/0436","BC/37"], ffr020612=["02/0612", "MB/188"],
			ffr020549=["02/0549", "4718-G"], ffr020466=["02/0466", "MB/185"], ffr020548=["02/0548", "4718-F"], ffr100000013691=["164291", "4719"]];
			function novaJanelaProducao(){
				window.open('producao.html', 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no' );
			}
			function checarMatriz2(id){
				let matriz = document.getElementById("proximaMatriz"+id).value; 
				let m = localStorage.getItem("proxima"+id);
				if(matriz=="undefined" || matriz==null){
					matriz = document.getElementById("proximaMatriz"+id).textContent;
				}
				let bool = false;
				if(matriz!=null && matriz!='' && matriz!='NaN'){
					matrizes.forEach(element => { 
						let el = matriz.split(''); 
						let eleC;
						if(el.length<6){
							eleC = matriz; 
						}else if(matriz=="164291"){
							eleC = matriz;
						}
						else{
							eleC = el[0]+el[1]+el[2]+el[3]+el[4]+el[5]+el[6]; 
						} 
						if(eleC==element[0] || eleC===element[0]) { 
							document.getElementById("proximaReferencia"+id).value = element[1];
							document.getElementById("proximaReferencia"+id).innerHTML = element[1];
							bool = true;
							localStorage.setItem("proxima"+id+"_matriz", matriz);
							localStorage.setItem("proxima"+id+"_referencia", element[1]);
						}
					});
	}
	if(bool==true){
		document.getElementById("proximaMatriz"+id).style.background = "";
	}else{
		document.getElementById("proximaMatriz"+id).style.background = "red";
	}
}
function checarMatriz(id){
	let matriz = document.getElementById("matriz"+id).value; 
	let m = localStorage.getItem("maquina"+id);
	if(matriz=="undefined" || matriz==null){
		matriz = document.getElementById("matriz"+id).textContent;
	}
	let bool = false;
	if(matriz!=null && matriz!='' && matriz!='NaN'){
		matrizes.forEach(element => { 
			let el = matriz.split(''); 
			let eleC;
			if(el.length<6){
				eleC = matriz; 
			}else if(matriz=="164291"){
				eleC = matriz;
			}
			else{
				eleC = el[0]+el[1]+el[2]+el[3]+el[4]+el[5]+el[6]; 
			} 
			if(eleC==element[0] || eleC===element[0]) { 
				document.getElementById("referencia"+id).value = element[1];
				document.getElementById("referencia"+id).innerHTML = element[1];
				bool = true;
				localStorage.setItem(m+"_matriz", matriz);
				localStorage.setItem(m+"_referencia", element[1]);
			}
		});
	}
	if(bool==true){
		document.getElementById("matriz"+id).style.background = "";
	}else{
		document.getElementById("matriz"+id).style.background = "red";
	}
}
			function verificarPeca(numero){
				let ref = localStorage.getItem(numero+"_referencia");
				if(ref==null || ref==''){
					return 3.75;
				}else{
					let lista4 = ['2240', '4707', '4515', '4709'];
					let retorno;
					var arrey = ref.split("-");
					for(var i=0;i<lista4.length;i++){
						if(lista4[i]==arrey[0]){
							retorno = 4;
						}else{
							retorno = 3;
						}
					}
					if(arrey[0]=='4719'){
						retorno = 5;
					}
					if(arrey[0]=='4702'){
						retorno = 6;
					}
				return retorno;
				}
			}
			function turno(){
				var t = document.getElementById("turno").value;
				sessionStorage.setItem("turno", t);
			}
			
			function mudar(){ 
				window.resizeTo(400, 700);
			document.write('<link href="css/style.css" rel="stylesheet"><link href="ballon.css" rel="stylesheet">');
			document.write("<table id='tabela' class='tbl' style='border: solid 1px #DDD; border-collapse: collapse; padding: 3px 6px; text-align: center; color: #191970;'>");
			document.write("<tr><th colspan='3'><p id='hora' class='primeiroP'></p></th></tr>");
			//document.write("<th><button  type='button' id='ocultar_detalhes' onclick='Mudarestado()'>Ocultar Detalhes/Mostrar Detalhes</button></th></tr>");
			document.write("<tr><th>prensas</th><th>cargas feita OP</th><th>cargas feita turno</th></tr>");
			let maqs;
			if(getVao()==2){
				this.maqs = listaMaquinas2;
			}else{
				this.maqs = listaMaquinas3;
			}
			for(let i=0;i<16;i++){  
				document.write("<tr>");
				document.write("<td><label>"+this.maqs[i]+"</label></td>");
					//document.write("<td>"+this.metas[i]+"</td>");
					//document.write("<td>"+this.telhaCiclo[i]+"</td>");
					document.write("<td>"+this.cargasOP[i]+"</td>");
					document.write("<td>"+this.cargasTurno[i]+"</td>");
					document.write("</tr>");
				document.write("<br>");
			} 
			document.write("<tr><td><button class='tooltip-white' aria-label='Fecha a pagina atual salvado os dados que foram inseridos.' data-balloon-pos='rigth' id='btn' type='button' onclick='salvar()' >Salvar Dados</button></td></tr>");
			document.write("</table>");
		}
		function salvar(){ 
				let i =0; 
				localStorage.setItem('salva', getData()+getTurno());
				for(let i =0; i<16;i++){ 
					localStorage.setItem("cOp"+i, document.getElementById('cOp'+i).value); 
					localStorage.setItem("cT"+i, document.getElementById('cT'+i).value); 
				}
				Metas(); //reabre a página de metas
				//window.close();
		}
		function checarCargasFeitasOp(i){
			let id = "cOp"+i; 
			let maq = localStorage.getItem("maquina"+i); 
			let valor = document.getElementById(id).value; 
			let opC = localStorage.getItem(maq+"_qnt"); 
			let tc = document.getElementById("tc"+i).value;
			valor = valor*tc; 
			if(valor!='' && valor!=null && valor<=opC && valor>=0){
				document.getElementById(id).style.backgroundColor = "";
			}else{
				document.getElementById(id).style.backgroundColor = "red";
				document.getElementById(id).value = "0";
			}
		}
		function checarOP(i){
			let id ="op"+i; 
			let m = localStorage.getItem("maquina"+i);
			if(document.getElementById(id).value!='' && document.getElementById(id).value!=null){
				let op = document.getElementById(id).value; 
				let aux = op.split(''); 
				if(aux.length!=8){
					clearInterval(lookForChange);
					document.getElementById(id).style.background = "red";
				}else{
					document.getElementById(id).style.background = '';
				}
			}else{
				let op = document.getElementById(id).textContent; 
				let aux = op.split(''); 
				if(aux.length!=8){
					document.getElementById(id).style.background = "red";
				}else{
					document.getElementById(id).style.background = '';
				}
				localStorage.setItem(m+"_op", op);
			}
		}	 
		function checarProximaOP(i){
			let proximaOP = "proximaOp"+i;
			if(document.getElementById(proximaOP).value!='' && document.getElementById(proximaOP).value!=null){
				let opP = document.getElementById(proximaOP).value; 
				let auxP = opP.split(''); 
				if(auxP.length!=8){
					clearInterval(lookForChange);
					document.getElementById(proximaOP).style.background = "red";
				}else{
					document.getElementById(proximaOP).style.background = '';
				}
			}
		}
		function checarPeso(i){
			let p = "peso"+i;
			if(document.getElementById(p).value!=null && document.getElementById(p).value!='' && document.getElementById(p).textContent!="undifined"){
				let numero = parseInt(document.getElementById(p).value); 
				if (!isNaN(numero) === true) {
					// se é um numero vai cari aqui
					document.getElementById(p).style.background = "";
				}
				if(numero<9999 && numero>1000){ 
					document.getElementById(p).style.background = "";
				}
				else{
					clearInterval(lookForChange); 
					document.getElementById(p).style.background = "red";
				}
			}else if(document.getElementById(p).textContent!=null && document.getElementById(p).textContent!="undifined" && document.getElementById(p).value!=''){
				let numero = document.getElementById(p).textContent;
				if (!isNaN(numero) === true) {
					// se é um numero vai cari aqui
					document.getElementById(p).style.background = "";
				}
				if(numero<9999 && numero>1000){
					document.getElementById(p).style.background = "";
				}
				else{
					document.getElementById(p).style.background = "red";
				}
				let m = localStorage.getItem("maquina"+i);
				localStorage.setItem(m+"_peso", numero);
			}
		}
		function checarProximoPeso(i){
			let p2 = "proximaPeso"+i;
			if(document.getElementById(p2).value!=null && document.getElementById(p2).value!=''){
				let numero2 = document.getElementById(p2).value;
				if (!isNaN(numero2) === true) {
					// se é um numero vai cari aqui
					document.getElementById(p2).style.background = "";
				}
				if(numero2<9999 && numero2>1000){
					document.getElementById(p2).style.background = "";
				}
				else{
					clearInterval(lookForChange);
					document.getElementById(p2).style.background = "red";
				}
			}
		}
		function checarQnt(i){
			let p = "qnt"+i;
			if(document.getElementById(p).value!=null && document.getElementById(p).value!=''){
				let numero = document.getElementById(p).value;
				if (!isNaN(numero) === true) {
					// se é um numero vai cari aqui
					document.getElementById(p).style.background = "";
				}
				if(numero<=540 && numero>9){
					document.getElementById(p).style.background = "";
				}
				else{
					clearInterval(lookForChange);
					document.getElementById(p).style.background = "red";
				}
			}
			if(document.getElementById(p).textContent!=null && document.getElementById(p).textContent!=''){
				let numero = document.getElementById(p).textContent;
				if (!isNaN(numero) === true) {
					// se é um numero vai cari aqui
					document.getElementById(p).style.background = "";
				}
				if(numero<=540 && numero>9){
					document.getElementById(p).style.background = "";
				}
				else{
					document.getElementById(p).style.background = "red";
				}
				let m = localStorage.getItem("maquina"+i);
				localStorage.setItem(m+"_qnt"+i, numero);
			}
		}
		function checarProximaQnt(i){
			let p2 = "proximaQnt"+i;
			if(document.getElementById(p2).value!=null && document.getElementById(p2).value!=''){
				let numero2 = document.getElementById(p2).value;
				if (!isNaN(numero2) === true && numero2<=540 && numero2>9) {
					// se é um numero vai cari aqui
					document.getElementById(p2).style.background = "";
				}
				else{
					clearInterval(lookForChange);
					document.getElementById(p2).style.background = "red";
				}
			}
		}
		function checarMaterial(i){
			let materiais = ["4270", "270", "328", "438", "510", "520", "530", "710", "106", "988", "980", "992", "8223", "223", "111", "8794", "794", "8990", "990", "125", "695", "2695","4707", "707", "5228", "228", "876", "0876"];
			let m = "material"+i;
			let bol = false;
			if(document.getElementById(m).value!=null && document.getElementById(m).value!=''){ 
				clearInterval(lookForChange);
				let numero = parseInt(document.getElementById(m).value);
				for(let ii=0; ii<materiais.length;ii++){ 
					if(numero==materiais[ii]){
						bol = true;
					}
				}
				if ((!isNaN(numero) === true) && (bol==true)) {
					// se é um numero vai cari aqui
					document.getElementById(m).style.background = "";
				}
				else{
					document.getElementById(m).style.background = "red";
				}
			}
			if(document.getElementById(m).textContent!=null && document.getElementById(m).textContent!=''){  
				let numero = parseInt(document.getElementById("material"+i).textContent); 
				for(let ii=0; ii<materiais.length;ii++){ 
					if(numero==materiais[ii]){
						bol = true;
					}
				}
				if ((!isNaN(numero) === true) && (bol==true)) {
					document.getElementById(m).style.background = "";
				}
				else{
					document.getElementById(m).style.background = "red";
				}
				let m1 = localStorage.getItem("maquina"+i); 
				localStorage.setItem(m1+"_material", numero); 
			}
		}
		function checarProximaMaterial(i){
			clearInterval(lookForChange);
			let materiais = ["4270", "270", "328", "438", "510", "520", "530", "710", "106", "988", "980", "992", "8223", "223", "111", "125", "4707", "707", "8990", "990", "876", "0876"];
			let m2 = "proximaMaterial"+i;
			let bool2 = false;
			if(document.getElementById(m2).value!=null && document.getElementById(m2).value!=''){
				let numero2 = parseInt(document.getElementById(m2).value);
				for(let i2=0; i2<materiais.length;i2++){ 
					if(numero2==materiais[i2]){
						bool2 = true;
					}
				}
				if ((!isNaN(numero2) === true) && (bool2==true)) {
					// se é um numero vai cari aqui
					document.getElementById(m2).style.background = "";
				}
				else{
					document.getElementById(m2).style.background = "red";
				}
			} 
		}
		function carregaCargas(){
			let cto =[]; 
			let ct = [];
			if(localStorage.getItem('salva')==getData()+getTurno()){
				for(var i=0;i<16;i++){
					cto.push(localStorage.getItem('cOp'+i));
					ct.push(localStorage.getItem('cT'+i));
				}
			}
			let array = [cto, ct];
			return array;
		}
		function pontoVirgula(meta){
			let nm;
			let m = meta.split(",");
			if(m.length>1){
				nm = m[0]+"."+m[1];
			}else{
				nm = meta;
			}
			return parseFloat(nm);
		}
			var ia=new InteligenciaArtificial();
			function aplicar(){ 
				var contMetas = 0; 
				var somasMetas = 0;
				let lista;
				if(getVao()==2){
					lista = this.listaMaquinas2; 
				}else if(getVao()==3){
					lista = this.listaMaquinas3;
				}
				for(var i = 0; i<lista.length; i++){ 
					var nM = lista[i]; // nM= numero Maquina
					var m = new Maquina(nM); // objeto Maquina
					if(document.getElementById("meta"+[i]).value!=null && document.getElementById("meta"+[i]).value!=''){
						m.meta = pontoVirgula(document.getElementById("meta"+[i]).value);
					}else{
						m.meta = document.getElementById("meta"+[i]).value;
					}
					m.telhaPorCiclo = document.getElementById("tc"+[i]).value; 
					m.realizadaOP = document.getElementById("cOp"+[i]).value;  
					m.realizadaTurno = document.getElementById("cT"+[i]).value;  
					m.pecaPorTelha = verificarPeca(m.numero); 
					var p = new Producao();
					p.maquina = m.numero;
					p.producaoTelhas = m.getProducaoTelhas(); 
					p.producaoPecas = m.getProducaoEmPeca();
					p.data = getData(); 
					p.turno = getTurno(); 
					p.calculaQuilos();
					p.calculaIrog(m.meta); 
					quantidadeOp(m.numero, m.realizadaOP, m.telhaPorCiclo); 
					listaMaquinas.push(m);
					listaProducao.push(p);
					if(p.producaoTelhas>0){ 
						somasTelhas += p.producaoTelhas;
					}	
					if(p.producaoPecas>0){ 
						somasPecas += p.producaoPecas; 
					}
					if(m.meta>0){
						this.contMetas++;
						somasMetas += parseFloat(p.calculaIrog(m.meta));
					}
					if(p.producaoQuilos>0){
						somasQuilos += p.producaoQuilos;
					}  
					var mm = "telhaPorCiclo:"+m.telhaPorCiclo+";meta:"+m.meta+";pecaPorTelha:"+m.pecaPorTelha+";realizadaOP:"+m.realizadaOP+";realizadaTurno:"+m.realizadaTurno;
					localStorage.setItem(m.numero+"_metas"+p.turno, mm);
					var pp = "maquina:"+p.maquina+";producaoTelhas:"+p.producaoTelhas+";producaoPecas:"+p.producaoPecas+";producaoQuilos:"+p.producaoQuilos+";irog:"+p.irog;
					localStorage.setItem(p.data+"_data"+p.maquina+"_producao"+p.turno, pp); 
					this.ia.setId(p.data+"_data"+p.maquina+"_producao"+p.turno);
					
				}
				resultado(listaMaquinas, listaProducao, somasTelhas, somasPecas, somasMetas, this.contMetas, somasQuilos); 
			}
			function quantidadeOp(maquina, ciclos, telhaPorCiclo){
				if(telhaPorCiclo!=null && ciclos!=null){
					let produzido = ciclos*telhaPorCiclo;
					localStorage.setItem(maquina+"_qntFeita", produzido);
				}else{
					localStorage.setItem(maquina+"_qntFeita", '0');
				}	
				
			}
			function recuperarObject(numero){
				var m = new Maquina(numero); 
				var t = getTurno();
				var objeto;
				if (getDiaDaSemana() == "Sabado") {
					let n = numero + "_metas" + t + "Sabado";
					if (localStorage.getItem(n) != null && localStorage.getItem(n) != '') {
						objeto = localStorage.getItem(n); 
					} else {
						let n = numero + "_metas" + t;
						objeto = localStorage.getItem(n);
					}

				} else {
					let n = numero + "_metas" + t;
					objeto = localStorage.getItem(n);
				} 
				var array1 = objeto.split(";"); 
				for(var i = 0; i< array1.length;i++){
					var array2 = array1[i].split(":");
					if(i==0){
						m.telhaPorCiclo = array2[1];
					}
					if(i==1){
						m.meta = array2[1];
					}
					if(i==2){
						m.pecaPorTelha = array2[1];
					}
					if(i==3){
						m.realizadaOP = array2[1];
					}
					if(i==4){
						m.realizadaTurno = array2[1];
					}
				}
				return m;
			}
			function getTurno(){
				let t;
				now = new Date();
				horas = now.getHours(); 
				if(getDiaDaSemana()=="Sabado"){ 
					if(horas==8){
						if(timeMinutos()>35 && (horas<=18)){
							sessionStorage.setItem("turno", 1);
							t = 1;
						}else{
							sessionStorage.setItem("turno", 3);
							t = 3;
						}
					}else if((horas>18) && (horas<=24)){
						t = 2;
						sessionStorage.setItem("turno", t);
					}else if((horas<18) && (horas>=9)){
						t = 1;
						sessionStorage.setItem("turno", t);
					}else{
						t = 3;
						sessionStorage.setItem("turno", t);
					}
				}else{
					if((horas>=6) && (horas<15) && (horas!=0)){ 
						sessionStorage.setItem("turno", 1);
						t = 1;
					}else if((horas>=15) && (horas<=24 || horas==0)){ 
						if((horas==24 || horas==0) && timeMinutos()>25){
							t = 3;
						}else{
							t = 2;
							sessionStorage.setItem("turno", t);
						}
					}else if(horas>0 && horas<6){
						if(horas==0 && timeMinutos()<=25){
							t = 2;
						}else{
							t = 3;
							sessionStorage.setItem("turno", t);
						}
						t = 3;
						sessionStorage.setItem("turno", t);
					}else{
						t = 3;
					}
				}
				return t;
			}
			function timeMinutos(){
				today=new Date();
				m=today.getMinutes();
				return m;
			}
			function Parada(){
			this.maquina;
			this.data;
			this.descricao=[];
			this.turno;
			this.hora;
		}
		
		function recuperarParada2(maquina){
			//parada:1019;turno:2;dia:11/3/2020 ultimaParada_turno2_vao3 exemplo
			let dia = localStorage.getItem("ultimaParada_turno2_vao"+getVao());
			let string = localStorage.getItem("parada:"+maquina+";turno:2;dia:"+dia);
			let stringHora = localStorage.getItem("Horaparada:"+maquina+";turno:2;dia:"+dia);
			let p = new Parada();
			p.maquina = maquina; 
			p.data = dia;
			p.turno = 2;
			let s = string.split("//"); //se a descrição tiver mais que uma parada então ela e dividida 
			if(s.length>1){
				for(let i = 0;i<s.length; i++){
					p.descricao.push(s[i]);
				}
			}else{
				p.descricao.push(string);
			}
			p.hora = stringHora;
			return p;
		}
			function recuperarParada1(maquina){
				//parada:1019;turno:2;dia:11/3/2020 ultimaParada_turno2_vao3 exemplo
				let dia = localStorage.getItem("ultimaParada_turno1_vao"+getVao());
				let string = localStorage.getItem("parada:"+maquina+";turno:1;dia:"+dia);
				let stringHora = localStorage.getItem("Horaparada:"+maquina+";turno:1;dia:"+dia);
				let p = new Parada();
				p.maquina = maquina; 
				p.data = dia;
				p.turno = 1;
				let s = string.split("//"); //se a descrição tiver mais que uma parada então ela e dividida 
				if(s.length>1){
					for(let i = 0;i<s.length; i++){
						p.descricao.push(s[i]);
					}
				}else{
					p.descricao.push(string);
				}
				p.hora = stringHora;
				return p;
			}
			function recuperarParada3(maquina){
				//parada:1019;turno:2;dia:11/3/2020 ultimaParada_turno2_vao3 exemplo
				let dia = localStorage.getItem("ultimaParada_turno3_vao"+getVao());
				let string = localStorage.getItem("parada:"+maquina+";turno:3;dia:"+dia);
				let stringHora = localStorage.getItem("Horaparada:"+maquina+";turno:3;dia:"+dia);
				let p = new Parada();
				p.maquina = maquina; 
				p.data = dia;
				p.turno = 3;
				let s = string.split("//"); //se a descrição tiver mais que uma parada então ela e dividida 
				if(s.length>1){
					for(let i = 0;i<s.length; i++){
						p.descricao.push(s[i]);
					}
				}else{
					p.descricao.push(string);
				}
				p.hora = stringHora;
				return p;
			}
			function Producao(){
				this.maquina;
				this.producaoTelhas;
				this.producaoPecas;
				this.producaoQuilos;
				this.irog = 0;
				this.turno; 
				this.data;
				this.parada;
			}
			function LSProducao(dia, maquina, turno){ 
				//20/3/2020_data1019_producao1 
				//maquina:1410;producaoTelhas:600;producaoPecas:1800;producaoQuilos:2520;irog:94.6
				if(localStorage.getItem(dia+"_data"+maquina+"_producao"+turno)!=null){
					let string = localStorage.getItem(dia+"_data"+maquina+"_producao"+turno); 
					let string2 = string.split(";"); 
					let t = string2[1].split(":"); 
					let pcs = string2[2].split(":"); 
					let kg = string2[3].split(":"); 
					let irg = string[4].split(":");
					let p = new Producao();
					p.maquina = maquina; 
					p.producaoTelhas = t[1];
					p.producaoPecas = pcs[1];
					p.producaoQuilos = kg[1]; 
					p.irog = irg[1];
					p.turno = turno;
					p.data = dia; 
					return p;
				}else{
					return null;
				}
			}
			function getDateEmail(){
				now = new Date();
					d = now.getDate();
					var m = 1;
					m += now.getMonth();
					y = now.getFullYear();
					var dt = d+"_"+m+"_"+y;
					return dt; // retorna o valor no formado 6_7_2020
			}
			function getData(){
					now = new Date();
					d = now.getDate();
					var m = 1;
					m += now.getMonth();
					y = now.getFullYear();
					var dt = d+"/"+m+"/"+y;
					return dt;
			}
			function getYestardayData(menos){
					now = new Date();
					d = now.getDate();
					var m = 1;
					m += now.getMonth();
					y = now.getFullYear();
					if(m!=2){
						var dt = (d-menos)+"/"+m+"/"+y;
					}else if(m==2 && ((d-menos==30 || d-menos==31))) {
						var dt = 28+"/"+m+"/"+y;
					}
					return dt;
			}
			function getHours(){
				let now = new Date();
				let h = now.getHours();
				let m = now.getMinutes();
				if(m<10){
					m = "0"+m;
				}
				//let s = now.getSeconds();
				let ht = "Agora sao: "+h+":"+m;
				return ht;
			}
			
			function getHoras(){
				let now = new Date();
				let h = now.getHours();
				let m = now.getMinutes();
				let s = now.getSeconds();
				let ht = h+":"+m+":"+s;
				return ht;
			}
			function getDiaDaSemana(){
				var semana = ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
				var d = new Date();
				return semana[d.getDay()];
			}
			function getDiaDaSemanaPelaData(dataPadraoAmericano){
				var semana = ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
				var d = new Date(dataPadraoAmericano);
				return semana[d.getDay()];
			}
			
			Producao.prototype.calculaQuilos = function(){
				var qlos = this.maquina+"_peso";
				var peso = localStorage.getItem(qlos);
				return this.producaoQuilos = parseInt((peso*this.producaoTelhas)/1000);
			}
			function Maquina(n){ // recebe o número da máquina
				this.numero = n; 
				this.meta;
				this.telhaPorCiclo;
				this.pecaPorTelha = 3.75;
				this.realizadaOP;
				this.realizadaTurno;
			}
			Maquina.prototype.getProducaoTelhas = function(){
				return this.telhaPorCiclo*this.realizadaTurno;
			}
			Maquina.prototype.getProducaoEmPeca = function(){
				var peca;
				var pdr = this.getProducaoTelhas();
				if(this.pecaPorTelha!=null){
					peca = pdr*this.pecaPorTelha;
				}else{
					peca = pdr*3.75;
				}
				return peca;
			}
			function calculaIrogTotal(telhas, meta){
				let irg;// alert(telhas);
				if(meta!=null){
					irg = ((telhas/meta)*100);
				}
				var arredondado = parseInt(irg.toFixed(2));
				return arredondado;
			}
			Producao.prototype.calculaIrog = function(meta){
				var irg;
				if(meta!=null){
					irg = ((this.producaoTelhas/meta)*100);
				}
				var arredondado = parseFloat(irg.toFixed(2));
				this.irog = arredondado;
				return arredondado;
			}
			function setContatos(n , contatos, conn){
				if(n==1){
					this.contato1 = contatos[0];
				}else if(n==2){
					this.contato1 = contatos[0]+";"+contatos[1];
				}else if(n==3){
					this.contato1 =  contatos[0]+";"+contatos[1]+";"+contatos[2];
				}else{
					alert("inserir no máximo 3 contatos");
				}
				if(conn==":"){
					this.contatoCon = " ";
				}
				this.contatoCon = conn;
			}
			var contato1;
			var contato2;
			var contato3;
			var contatoCon;
			var corpoDoEmail = [];
			var corpoDoEmail2 = [];
			var corpoDoEmail3 = [];
			var corpoDoEmail4 = [];
			var corpoDoEmail5 = [];
			var corpoDoEmail6 = [];
			//  You can add newline by writing %0D%0A in the text of the body.
			// You can add spaces by writing %20 in the text of the subject or body. escape(this.corpoDoEmail)
			function sendMail() { alertOutlook();
			var link = "mailto:"+contato1 
					 + "?cc="+contatoCon+" "
					 + "&subject=" + escape("produzido dia "+getData())
					 + "&body=" + this.corpoDoEmail3[0]+"%0D%0A"+this.corpoDoEmail3[1]+"%0D%0A"+this.corpoDoEmail3[2]+"%0D%0A"+this.corpoDoEmail3[3]+"%0D%0A------------- RELATORIO --------------%0D%0A"+
					 this.corpoDoEmail[0]+"%20"+this.corpoDoEmail2[0]+"%20"+corpoDoEmail5[0]+"T%20"+corpoDoEmail6[0]+"Kg%0D%0A"+this.corpoDoEmail[1]+"%20"+this.corpoDoEmail2[1]+"%20"+corpoDoEmail5[1]+"T%20"+corpoDoEmail6[1]+"Kg%0D%0A"+
					 this.corpoDoEmail[2]+"%20"+this.corpoDoEmail2[2]+"%20"+corpoDoEmail5[2]+"T%20"+corpoDoEmail6[2]+"Kg%0D%0A"+this.corpoDoEmail[3]+"%20"+this.corpoDoEmail2[3]+"%20"+corpoDoEmail5[3]+"T%20"+corpoDoEmail6[3]+"Kg%0D%0A"+
					 this.corpoDoEmail[4]+"%20"+this.corpoDoEmail2[4]+"%20"+corpoDoEmail5[4]+"T%20"+corpoDoEmail6[4]+"Kg%0D%0A"+this.corpoDoEmail[5]+"%20"+this.corpoDoEmail2[5]+"%20"+corpoDoEmail5[5]+"T%20"+corpoDoEmail6[5]+"Kg%0D%0A"+
					 this.corpoDoEmail[6]+"%20"+this.corpoDoEmail2[6]+"%20"+corpoDoEmail5[6]+"T%20"+corpoDoEmail6[6]+"Kg%0D%0A"+this.corpoDoEmail[7]+"%20"+this.corpoDoEmail2[7]+"%20"+corpoDoEmail5[7]+"T%20"+corpoDoEmail6[7]+"Kg%0D%0A"+
					 this.corpoDoEmail[8]+"%20"+this.corpoDoEmail2[8]+"%20"+corpoDoEmail5[8]+"T%20"+corpoDoEmail6[8]+"Kg%0D%0A"+this.corpoDoEmail[9]+"%20"+this.corpoDoEmail2[9]+"%20"+corpoDoEmail5[9]+"T%20"+corpoDoEmail6[9]+"Kg%0D%0A"+
					 this.corpoDoEmail[10]+"%20"+this.corpoDoEmail2[10]+"%20"+corpoDoEmail5[10]+"T%20"+corpoDoEmail6[10]+"Kg%0D%0A"+this.corpoDoEmail[11]+"%20"+this.corpoDoEmail2[11]+"%20"+corpoDoEmail5[11]+"T%20"+corpoDoEmail6[11]+"Kg%0D%0A"+
					 this.corpoDoEmail[12]+"%20"+this.corpoDoEmail2[12]+"%20"+corpoDoEmail5[12]+"T%20"+corpoDoEmail6[12]+"Kg%0D%0A"+this.corpoDoEmail[13]+"%20"+this.corpoDoEmail2[13]+"%20"+corpoDoEmail5[13]+"T%20"+corpoDoEmail6[13]+"Kg%0D%0A"+
					 this.corpoDoEmail[14]+"%20"+this.corpoDoEmail2[14]+"%20"+corpoDoEmail5[14]+"T%20"+corpoDoEmail6[14]+"Kg%0D%0A"+this.corpoDoEmail[15]+"%20"+this.corpoDoEmail2[15]+"%20"+corpoDoEmail5[15]+"T%20"+corpoDoEmail6[15]+"Kg%0D%0A"+
					 "arquivo disponível em Z:\\PUBLICO\\Siblo prensas(formulações)\\Arquivos de Produção\\vao "+getVao()+"\\vao"+getVao()+"_turno"+getTurno()+"_dia_"+getDateEmail()+"_producao.html";
			window.location.href = link; 
			//x=window.open(link); vao3_turno1_dia_6_7_2020_producao
		   // x.close();
			//window.open('mailto:'+contato1+'?cc='+contatoCon+'&subject='+"producao"+'&body='+this.corpoDoEmail, '_self');
		}
			
		// IA Inteliencia Artificial
		
		function InteligenciaArtificial(){
			this.ultimaProducaoT1 =[];
			this.ultimaProducaoT2 =[];
			this.ultimaProducaoT3 =[];
			this.ultimaMetaT1 = [];
			this.ultimaMetaT3= [];
			//recuperarObject
			
		}
		InteligenciaArtificial.prototype.trocarOrdem = function(maquina, meta, vao){
			let numero;
			for(let i = 0;i<16;i++){
				if(vao==2){
					if(listaMaquinas2[i]==maquina){
						numero=i; 
					}
				}else{
					if(listaMaquinas3[i]==maquina){
						numero=i;
					}
				}
			}
				let px = localStorage.getItem("proxima"+numero+"_op");   
				let peso = localStorage.getItem("proxima"+numero+"_peso");
				let qnt = localStorage.getItem("proxima"+numero+"_qnt");
				let material = localStorage.getItem("proxima"+numero+"_material"); 
				if(px!=null && px!=''){
					localStorage.setItem(maquina+"_op", px);
					localStorage.setItem("proxima"+numero+"_op", "");
				} 
				if(peso != null && peso != ""){
					localStorage.setItem(maquina+"_peso", peso);
					localStorage.setItem("proxima"+numero+"_peso", "");
				}
				if(qnt != null && qnt != ""){
					localStorage.setItem(maquina+"_qnt", qnt);
					localStorage.setItem("proxima"+numero+"_qnt", "");
				}
				if(material != null && material != ""){
					localStorage.setItem(maquina+"_material", material);
					localStorage.setItem("proxima"+numero+"_material", "");
				}
		}
		InteligenciaArtificial.prototype.checarOrdem = function(maquina, meta, vao){
			let qnt =  parseInt(localStorage.getItem(maquina+"_qnt")); 
			let produzido = parseInt(localStorage.getItem(maquina+"_qntFeita")); 
			let pd = qnt-produzido;
			let metaMenor = meta-meta*0.2; 
			if(metaMenor>=pd){
				return 1; 
			}else{
				return 0; 
			}
		}
		InteligenciaArtificial.prototype.setIdParada = function(){ 
			let turno = getTurno(); // parada:1019;turno:1;dia:4/4/2020
			let dia = getData();
			let vao = getVao();
			let ultimaParadaTurno = localStorage.getItem("ultimaParada_turno"+turno+"_vao"+vao); //ultimaParada_turno1_vao3
			if(ultimaParadaTurno!=dia){ 
				if(vao==2){
					listaMaquinas2.forEach(element => {
						if(localStorage.getItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno)!=null && localStorage.getItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno)!=''){
							localStorage.removeItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno);
							localStorage.removeItem("Horaparada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno);
						}
					});
				}else{
					listaMaquinas3.forEach(element => { 
					if(localStorage.getItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno)!=null && localStorage.getItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno)!=''){
						localStorage.removeItem("parada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno);
						localStorage.removeItem("Horaparada:"+element+";turno:"+turno+";dia:"+ultimaParadaTurno); 
					}
					});
				}
			}	
			localStorage.setItem("ultimoturnoParada", turno);
			localStorage.setItem("ultimaParada_turno"+turno+"_vao"+getVao(), getData());
		}
		InteligenciaArtificial.prototype.setId = function(data){ //controla o tamanho do localStorage em produção
			let id; 	
			if(localStorage.getItem("controlador")!=null){
				this.id = localStorage.getItem("controlador"); 
				if(this.id>=15){
					for(let i = 0;i<16;i++){
						let apagar = localStorage.getItem(i); 
						localStorage.removeItem(apagar);
					}
				} this.id=0;
			}
			this.id++; 
			localStorage.setItem("controlador", this.id);
			localStorage.setItem(this.id, data);
		}
		InteligenciaArtificial.prototype.setUltimaProducao = function(data, turno){ //salva uma string chave
			let ult = localStorage.getItem("ultimaPdr_turno"+turno+"_vao"+getVao()); 
			if(ult!=data){ //20/4/2020_data8833_producao2 
				if(getVao()==3){
					listaMaquinas3.forEach(element => {
						localStorage.removeItem(ult+"_data"+element+"_producao"+turno); 
					});
				}else{
					listaMaquinas2.forEach(element => {
						localStorage.removeItem(ult+"_data"+element+"_producao"+turno); 
					});
				}
				localStorage.setItem("ultimaPdr_turno"+turno+"_vao"+getVao(), data);
			}else{
				localStorage.setItem("ultimaPdr_turno"+turno+"_vao"+getVao(), data);
			}
	}
InteligenciaArtificial.prototype.carregarMeta = function (turno, vao) {
	
			if(localStorage.getItem("ultimaPdr_turno"+turno+"_vao"+getVao())!=null){ 
				let d = localStorage.getItem("ultimaPdr_turno" + turno + "_vao" + getVao());
				let t = turno; 
				let v = vao;
				let todasMetas = []; 
				/* let lista = buscarMaquina(v, t); */
				for (let i = 0; i < 16; i++) {
					let string;
					if (getDiaDaSemana() == "Sabado" && localStorage.getItem(buscarMaquina(v, i) + "_metas" + t + "Sabado")!=null) {
						
						string = localStorage.getItem(buscarMaquina(v, i) + "_metas" + t + "Sabado"); 
					} else {
						string = localStorage.getItem(buscarMaquina(v, i) + "_metas" + t);
					} 
					var m = new Maquina(getMaquinas(v)[i]); 
					let s1 = string.split(";");
						for(let s=0;s<s1.length;s++){ 
							let s2 = s1[s].split(":"); 
							switch(s){
								case 0:
									m.telhaPorCiclo = s2[1];
									break;
								case 1:
									m.meta = s2[1];
									break;
								case 2:
									m.pecaPorTelha = s2[1];
									break;
								case 3:
									m.realizadaOP = s2[1];
									break;
									case 4:
									m.realizadaTurno = s2[1]; 
									break;
							} //switch
				} //* fecha o for */	
				todasMetas.push(m); // ainda dentro do for vai adicionando metas ao array	
			} //for
			//alert("IA: metas do turno "+t+" carregadas");*/
			return todasMetas; // se o array for preenchido sem nenhuma falha retorna ele mesmo*/
			}else{
				return null;
			}
		} //* fecha a funcao */
		InteligenciaArtificial.prototype.carregarProducao = function(data, turno, vao){
				//alert("Welcome to IA");*/
				let d = data;
				let t = turno;
				let v = vao;
				let todasPdrs = []; // armazena todas as producoes recebidas
				for(var i=0;i<16;i++){ // percorre uma lista de maquinas. Como ambas as linhas tem a mesma quantidade foi definiodo o var 16
					var string = localStorage.getItem(data+"_data"+getMaquinas(vao)[i]+"_producao"+turno); 
					// string contem maquina:variavel;producaoTelhas:variavel;producaoPecas:variavel;producaoQuilos:variavel;irog:variavel
					var p = new Producao(); //nova instancia da classe Producao
					let s1 = string.split(";");
					for(let x=0; x<s1.length; x++){
						let s2 = s1.split(":");
						switch(x) {
							case 0:
								p.maquina = s2[1];
								break;
							case 1:
								p.producaoTelhas = s2[1]; 
								break;
							case 2:
								p.producaoPecas = s2[1];
								break;
							case 3:
								p.producaoQuilos = s2[1];
								break;
							case 4:
								p.irog = s2[1];
								break;
						// code block
						}
					}
					this.todasPdrs.push(p);
				}
				if(t==1){
					this.ultimaProducaoT1 = this.todasPdrs;
				}else if(t==2){
					this.ultimaProducaoT2 = this.todasPdrs;
				}else if(t==3){
					this.ultimaProducaoT3 = this.todasPdrs;
				}
			}
		function getMaquinas(va){
			this.v = va;
			if(v==2){ 
				return listaMaquinas2;
			}else if(v==3){ 
				return listaMaquinas3; 
			}
		}
		function paginaProducao(){
					window.open('dashboard/dashboard.html', 'janela', 'width=600, height=900, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no' );
		}
				function buscarIndice(maquina, vao){
					if(vao == 2){
						for(var i = 0; i<listaMaquinas2; i++){
							if(listaMaquinas2[i]==maquina){
								return i;
							}
						}
					}else if(vao == 3){
						for(var i = 0; i<listaMaquinas3; i++){
							if(listaMaquinas3[i]==maquina){
								return i;
							}
						}
					}
				}
				function pegarPesoLocalStorage(maquina){
					var m = maquina+"_peso";
					var peso = localStorage.getItem(m);
					
					return peso;
				}
				function pegarMaterialLocalStorage(maquina){
					var m = maquina+"_material";
					var material = localStorage.getItem(m);
					
					return material;
				}
				function pegarQuantidade(maquina){
					var m = maquina+"_qnt";
					var qnt = localStorage.getItem(m);
					if(qnt==null  || qnt==""){
						this.qntSet=1;
					}else{
						this.qntSet=0;
					}
					return qnt;
				}
				function pegarOpLocaLStorage(maquina){
					var m0 = maquina+"_op";
					var numero = localStorage.getItem(m0);
					if(numero==null || numero==""){
						this.opSet = 1;
					}else{
						this.opSet = 0;	
					}
					return numero;
				}
				function pegaMatrizLS(maquina){ 
					var m0 = maquina+"_matriz";
					var numero = localStorage.getItem(m0); 
					if((numero==null)|| (numero=="")){
						this.matrizReferencia = ['', ''];
						this.matrizSet = 0;
					}else{
						this.matrizSet = 1;
						var n = numero.split('');
						var test = n[0]+n[1]+n[2]+n[3]+n[4]+n[5]+n[6];
						for(var i = 0; i< this.matrizes.length; i++){
							if(test==matrizes[i][0]){
								this.matrizReferencia = matrizes[i];
							}else{
								var test2 = n[n.length-4]+n[n.length-3]+n[n.length-2]+n[n.length-1]+n[n.length];
								if(test2==matrizes[i][0]){
									this.matrizReferencia = matrizes[i];
								}else{
									var m1 = maquina+"_referencia";
									var numero2 = localStorage.getItem(m1);
									this.matrizReferencia = [numero, numero2];
								}
							}
						}
					}
				}
				function maiorValor(vetor){
					let maior = 0;
					for (let i = 0; i < vetor.length; i++) {
						   if ( vetor[i] > maior ) {
							  maior = i;
						   }
					}
					return maior;
				}
				function buscarPre(linha, indice){
					var retorno = "";
					if(linha==3){
						retorno =  preVao3[indice];
					}else if(linha==2){
						retorno = preVao2[indice];
					}
					return retorno;
				}
				function buscarMaquina(linha, maq){
					var vao = linha;
					if(vao==3){
						return listaMaquinas3[maq];
					}else if(vao==2){
						return listaMaquinas2[maq];
					}else if((vao=="") || (vao==null) || (vao="undefined") ){
						return listaMaquinasNull[maq];
					}
				}
				function selectPrograma(){
					let x = document.getElementById('programa').value; 
					sessionStorage.setItem("pagina", x);
					if(x==1){ 
						window.location.href='pagina1.html';	
					}else if(x==2){ 
						window.location.href='pagina2.html';
					}
					else{ 
						window.location.href='pagina.html';
					}
					
				}
				function header(){
						document.write("<table><th style='border: solid 2px; font-size: 12px;' colspan='2'>Nome <input type='text' id='nomeid' value='"+preparador+"' name='nome' /></th>");
						if(vao!=null){
							document.write('<th style="border: solid 2px; font-size: 12px;" id="head" colspan="3" >Selecione a Linha<select onchange="selecao();"id="linha" ><option value="'+this.vao+'">'+this.vao+'</option><option value="2" >2</option><option value="3" >3</option></select></th>');
						}else{
							document.write('<th style="border: solid 2px; font-size: 12px;" id="head">Selecione a Linha<select onchange="selecao();"id="linha" ><option value="0" ></option><option value="2" >2</option><option value="3" >3</option></select></th>');
						}	
					document.write("<th style='border: solid 2px; font-size: 12px;' id='head'>Parte do programa <select id='programa' onchange='selectPrograma();'><option value='0'></option><option value='3'>ambas partes</option><option value='1'>primeira parte</option><option value='2'>carregarMeta parte</option></select></th>");
						document.write("<th style='border: solid 2px; font-size: 12px;' id='head'><button id='head_button' onclick='enviar();' value='Submit'>Acompanhamento</button><th></table><br><br>");
				}
				function selecao(){
					this.vao = document.getElementById("linha").value;  
					let preparador = document.getElementById("nomeid").value;
					localStorage.setItem("preparador"+getTurno(), preparador);
					localStorage.setItem("vao", this.vao); 
					vaoSet = 0;
					window.location.href = 'pagina.html';
					for(var i =0; i<16; i++){
						sessionStorage.setItem('maquina'+i, buscarPre(this.vao, i));
					}
				}
				function paginaInicial(){
					window.location.href = 'index.html';
				}
					function getVao(){
					this.vao = localStorage.getItem("vao");
					if(this.vao==null){
						this.vao = 0;
					}
					return this.vao;
				}
				
				function novaJanelaParada(maquina){
					var m = localStorage.getItem("maquina"+maquina);
					sessionStorage.setItem("parada", m);
					window.open('paradas.html', 'janela', 'width=460, height=490, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no' );
					window.resizeTo(660, 600);
				}
				function Metas(){
					window.open('metas_versao01.html', 'janela', 'width=895, height=850, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no' );
				}
				function salvarMatrizLS(matriz, ref){
					localStorage.setItem(matriz, ref);
				}
				function salvarMaquina(maquina, matriz){
					localStorage.setItem(maquina+"_matriz", matriz);
				}
				function salvarNumeroDaMaquina(maquina, i){ 
					localStorage.setItem("maquina"+i, maquina);
				}
				function salvarOP(maquina, op){
					localStorage.setItem(maquina+"_op", op);
				}
				function salvarQnt(maquina, qnt){ 
					localStorage.setItem(maquina+"_qnt", qnt);
				}
				function salvarQntFeita(maquina, qntFeita){ 
					localStorage.setItem(maquina+"_qntFeita", qntFeita);
				}
				function salvarPeso(maquina, peso){ 
					localStorage.setItem(maquina+"_peso", peso);
				}
				function salvarMaterial(maquina, material){ 
					localStorage.setItem(maquina+"_material", material);
				}
				function salvarReferencia(maquina, referencia){
					localStorage.setItem(maquina+"_referencia", referencia);
				}
				function enviar(){ 
					for(let i = 0; i<16;i++){
						salvarMatrizLS(document.getElementById('matriz'+i).textContent,document.getElementById('referencia'+i).textContent);
						salvarMaquina(document.getElementById('maquina'+i).textContent ,document.getElementById('matriz'+i).textContent);
						salvarOP(document.getElementById('maquina'+i).textContent, document.getElementById('op'+i).textContent);
						salvarReferencia(document.getElementById('maquina'+i).textContent, document.getElementById('referencia'+i).textContent);
						salvarMaterial(document.getElementById('maquina'+i).textContent, document.getElementById('material'+i).textContent);
						salvarQnt(document.getElementById('maquina'+i).textContent, document.getElementById('qnt'+i).textContent);
						//salvarQntFeita(document.getElementById('maquina0').textContent, document.getElementById('qnt_pdz0').value);
						salvarPeso(document.getElementById('maquina'+i).textContent, document.getElementById('peso'+i).textContent);
					
					}
					
					for(var x=0;x<16;x++)
					{
						var referencia = document.getElementById('proximaReferencia'+x).textContent;
						var matriz = document.getElementById('proximaMatriz'+x).textContent;
						var maquina = "proxima"+x;
						var op = document.getElementById('proximaOp'+x).textContent; 
						var referencia = document.getElementById('proximaReferencia'+x).textContent;
						var material = document.getElementById('proximaMaterial'+x).textContent;
						var quantidade = document.getElementById('proximaQnt'+x).textContent;
						var peso = document.getElementById('proximaPeso'+x).textContent;
						salvarMatrizLS(matriz , referencia);
						salvarMaquina(maquina ,matriz);
						salvarOP(maquina, op);
						salvarReferencia(maquina,referencia);
						salvarMaterial(maquina, material);
						salvarQnt(maquina, quantidade);
						salvarPeso(maquina, peso);
					}
				}
		function salvarProducaoTxt(string, data, turno){
			var blob = new Blob([string], {type: "application/json;utf - 8"});
			saveAs(blob, data+":_producao_turno:"+turno+".txt");
		}
		function LinkSalvarProducao(){
			window.open('resultado.html', 'janela', 'width=970, height=790, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no' );
		}
		function getParadasEmail(maquinas){ 
			let array = [];
			for(var i = 0; i< maquinas.length; i++){ 
				let string = localStorage.getItem("parada:"+maquinas[i].numero+";turno:"+getTurno()+";dia:"+getData());
				if(string==null || string==''){ 
					string = '';
				}
				array.push(string); 
			}
			return array;
		}
		function getParadasParaDB(maquinas){
			let array = [];
			let arrayText = [];
			let arrayHora = [];
			for(var i = 0; i< maquinas.length; i++){
				let texto = localStorage.getItem("parada:"+maquinas[i]+";turno:"+getTurno()+";dia:"+getData());
				let hora = localStorage.getItem("Horaparada:"+maquinas[i]+";turno:"+getTurno()+";dia:"+getData());  //Horaparada:1019;turno:2;dia:7/5/2020
				if(texto==null || texto==''){ 
					arrayText.push("nulo");
					arrayHora.push("nulo");
				}else{
					arrayText.push(texto);
					arrayHora.push(hora);
				}
			}
			array.push(arrayText);
			array.push(arrayHora);
			return array;
		}
		function getParadasRelatorio(maquinas){ 
			let array = [];
			for(var i = 0; i< maquinas.length; i++){
				let string = localStorage.getItem("parada:"+maquinas[i]+";turno:"+getTurno()+";dia:"+getData());
				let string2 = localStorage.getItem("Horaparada:"+maquinas[i]+";turno:"+getTurno()+";dia:"+getData());  //Horaparada:1019;turno:2;dia:7/5/2020
				if(string==null || string==''){ 
					string = '';
				}else{
					let aux = string.split("//");
					let aux2 = string2.split("//");
					if(aux.length>1 && aux2.length == aux.length){
						string = '';
						for(let i=0;i<aux.length;i++){
							if(aux[i]!=null && aux2[i]!=null){
								string +=aux[i]+" às "+aux2[i]+"//";
							}else if(aux[i]!=null && aux2[i]==null){
								string +=aux[i]+"//";
							}else{
								string += '';
							}
								
						}
					}
				}
				array.push(string); 
			}
			return array;
		}
function gerarArquivoTxt(){
	let turno = getTurno();
    let dia = getData();
    let vao = getVao();
    let maquinas = []; 
	maquinas = getMaquinas(vao); 
	let array = ""; 
	let arrayParadas = getParadasRelatorio(maquinas);  
     for(var i = 0;i<maquinas.length;i++){ 
    	if(localStorage.getItem(maquinas[i]+"_metas"+turno)!=null){ 
    		let m = recuperarObject(maquinas[i]); 
			if(LSProducao(dia, maquinas[i], turno)==null){
				array+= ""+maquinas[i]+";"+m.meta+";"+m.getProducaoTelhas()+";"+m.getProducaoEmPeca()+";"+calculaIrogTotal(m.getProducaoTelhas(), m.meta )+"%;"+m.getProducaoTelhas()*parseInt(localStorage.getItem("peso"+i))+";"+arrayParadas[i]+"\n";
			}else{
				let p = LSProducao(dia, maquinas[i], turno);  //alert(""+maquinas[i]+";"+m.meta+";"+m.getProducaoTelhas()+";"+m.getProducaoEmPeca()+";"+calculaIrogTotal(m.getProducaoTelhas(), m.meta )+"%;"+p.producaoQuilos+";"+arrayParadas[i]+"\n");
				array+=""+maquinas[i]+";"+m.meta+";"+m.getProducaoTelhas()+";"+m.getProducaoEmPeca()+";"+calculaIrogTotal(m.getProducaoTelhas(), m.meta )+"%;"+p.producaoQuilos+";"+arrayParadas[i]+"\n";
			}
    		}	
	} 
	ia.setUltimaProducao(getData(), getTurno()); 
    var blob = new Blob([array], {type: "text/plain;charset=utf-8"}); 
	saveAs(blob, "vao"+vao+"_turno"+turno+"_dia_"+dia+"_producao.txt");
	localStorage.setItem("salvoTxt", dia+vao+turno);
   // window.close(); 
}
function alertarTroca(id){
	let ia = new InteligenciaArtificial(); 
	let valor = document.getElementById("meta"+id).value;
	let maquina = localStorage.getItem("maquina"+id); 
	let op = localStorage.getItem(maquina+"_op");
	let proximaOp = localStorage.getItem("proxima"+id+"_op");
	let proximaQnt = localStorage.getItem("proxima"+id+"_qnt");
	let proximaMaterial = localStorage.getItem("proxima"+id+"_material");
	let proximaPeso = localStorage.getItem("proxima"+id+"_peso");

	if(ia.checarOrdem(maquina, valor, getVao())==1){  
		localStorage.setItem("trocarMaq", maquina);
		localStorage.setItem("trocarMet", valor);
		Swal.fire({
			title: 'A OP '+op+' será finalizada!',
			text: "A próxima OP "+proximaOp+" será colocada no programa",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, mudar o programa!'
			}).then((result) => { 
				if (result.value) {  ia.trocarOrdem(localStorage.getItem("trocarMaq"), localStorage.getItem("trocarMet"), getVao());
					Swal.fire(
						'Feito!',
						maquina+' OP '+proximaOp+' Quantidade '+proximaQnt+' Material '+proximaMaterial+' Peso '+proximaPeso ,
						'success'
					)
				}
			})
	}
}
function checarMeta(id){ 
	let valor = document.getElementById("meta"+id).value;
	let tc = document.getElementById("tc"+id).value; 
	if(document.getElementById("meta"+id).value=='NaN'){
		document.getElementById("meta"+id).value = "";
	}
	
	if(getTurno()==3 && getDiaDaSemana()=='Sabado'){
		if(parseInt(valor)>99){
		
		}else if(parseInt(valor)==16 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "214.8";
		}else if(parseInt(valor)==15 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "221.96";
		}else if(parseInt(valor)==14 && parseInt(tc)==10){ 
			document.getElementById("meta"+id).value = "243.44"; 
		}else if(parseInt(valor)==13 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "250.6";
		}else if(parseInt(valor)==12 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "272.08";
		}else if(parseInt(valor)==11 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "286.4";
		}else if(parseInt(valor)==10 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "315.04";
		}
	
		else if(parseInt(valor)==16 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "436.76";
		}else if(parseInt(valor)==15 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "451.08";
		}else if(parseInt(valor)==14 && parseInt(tc)==20){ 
			document.getElementById("meta"+id).value = "479.72"; 
		}else if(parseInt(valor)==13 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "508.36";
		}else if(parseInt(valor)==12 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "544.06";
		}else if(parseInt(valor)==11 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "579.96";
		}else if(parseInt(valor)==10 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "622.92";
		}
		alertarTroca(id);
	}else if(getTurno()==3 && getDiaDaSemana()!='Sabado'){
			if(parseInt(valor)==16 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "158.8";
			}else if(parseInt(valor)==15 && parseInt(tc)==10){ 
			document.getElementById("meta"+id).value = "159.96"; 
			}else if(parseInt(valor)==14 && parseInt(tc)==10){ 
			document.getElementById("meta"+id).value = "175.44"; 
			}else if(parseInt(valor)==13 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "180.6";
			}else if(parseInt(valor)==12 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "196.08";
			}else if(parseInt(valor)==11 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "206.4";
			}else if(parseInt(valor)==10 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "227.04";
			}
			else if(parseInt(valor)==14 && parseInt(tc)==20){
				document.getElementById("meta"+id).value = "345.72";
			}else if(parseInt(valor)==13 && parseInt(tc)==20){
				document.getElementById("meta"+id).value = "366.36";
			}else if(parseInt(valor)==12 && parseInt(tc)==20){
				document.getElementById("meta"+id).value = "392.16";
			}else if(parseInt(valor)==11 && parseInt(tc)==20){
				document.getElementById("meta"+id).value = "417.96";
			}else if(parseInt(valor)==10 && parseInt(tc)==20){
				document.getElementById("meta"+id).value = "448.92";
			}
			alertarTroca(id);
	}else{
		if(parseInt(valor)==16 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "234,9";
		}else if(parseInt(valor)==14 && parseInt(tc)==10){ 
			document.getElementById("meta"+id).value = "266.22"; 
		}else if(parseInt(valor)==13 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "274.05";
		}else if(parseInt(valor)==12 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "297.54";
		}else if(parseInt(valor)==11 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "313.2";
		}else if(parseInt(valor)==10 && parseInt(tc)==10){
			document.getElementById("meta"+id).value = "344.52";
		}
	
		else if(parseInt(valor)==14 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "524.61";
		}else if(parseInt(valor)==13 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "555.93";
		}else if(parseInt(valor)==12 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "595.08";
		}else if(parseInt(valor)==11 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "634.23";
		}else if(parseInt(valor)==10 && parseInt(tc)==20){
			document.getElementById("meta"+id).value = "681.21";
		}
	
	
		else if(parseInt(valor)==16 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "321.03";
		}else if(parseInt(valor)==15 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "344.52";
		}else if(parseInt(valor)==14 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "352.35";
		}else if(parseInt(valor)==13 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "368.01";
		}else if(parseInt(valor)==12 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "391.5";
		}else if(parseInt(valor)==11 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "407.16";
		}else if(parseInt(valor)==10 && parseInt(tc)==15){
			document.getElementById("meta"+id).value = "446.31";
		}
		alertarTroca(id);
	}
	// quando a meta é acertada a mão
	if(valor == "10t" || valor == "10T" || valor == "10 t" || valor == "10 T"){
		document.getElementById("meta"+id).value = 10;
	}else if(valor == "15t" || valor == "15T" || valor == "15 t" || valor == "15 T"){
		document.getElementById("meta"+id).value = 15;
	}else if(valor == "20t" || valor == "20T" || valor == "20 t" || valor == "20 T"){
		document.getElementById("meta"+id).value = 20;
	}
}
function trocarTurno(){
	let ia = new InteligenciaArtificial();
	let string = ''; 
	if(getVao()==2){
		listaMaquinas2.forEach(element => {
			let mt;
			for(let i=0;i<16;i++){
				if(element==listaMaquinas2[i]){
					mt=i;
				}
			}
			if(ia.checarOrdem(element, document.getElementById("meta"+mt).value, getVao())==1){
				string += "<p style='color: red'>"+element+" op "+localStorage.getItem(element+"_op")+" trocada pela op "+localStorage.getItem("proxima"+mt+"_op")+"</p>"; 
				ia.trocarOrdem(element, document.getElementById("meta"+mt).value, getVao());
			}
			document.getElementById("cOp"+mt).value = '';
		});
		document.getElementById('ordens').innerHTML = string;
	}else{
		listaMaquinas3.forEach(element => {
			let mt1;
			for(let i=0;i<16;i++){
				if(element==listaMaquinas3[i]){
					mt1=i;
				}
			}
			if(ia.checarOrdem(element, document.getElementById("meta"+mt1).value, getVao())==1){ 
				string += "<p>"+element+" op "+localStorage.getItem(element+"_op")+" trocada pela op "+localStorage.getItem("proxima"+mt1+"_op")+"</p>"; 
				ia.trocarOrdem(element, document.getElementById("meta"+mt1).value, getVao());
			}
			document.getElementById("cOp"+mt1).value = '';
		});
		document.getElementById('ordens').innerHTML = string; 
	}
	localStorage.setItem("ultimoTurno", getTurno());
}
function primeiraChecagem(){
	if(localStorage.getItem("ultimoTurno")!=getTurno()){
		const swalWithBootstrapButtons = Swal.mixin({
					customClass: {
					  confirmButton: 'btn btn-success',
					  cancelButton: 'btn btn-danger'
					},
					buttonsStyling: false
				  })
				  
		swalWithBootstrapButtons.fire({
			title: localStorage.getItem("preparador" + getTurno()) + ' Utilizar as mesmas metas de Ontem?',
					text: "Verificaremos quais ordens serão finalizadas",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonText: 'Sim, checar ordens que irão terminar no nosso turno!',
					cancelButtonText: 'Não, cancelar!',
					reverseButtons: true
				  }).then((result) => {
					if (result.value) { trocarTurno();
					  swalWithBootstrapButtons.fire(
						'Feito!',
						'Observar a descrição abaixo.',
						'success'
					  )
					} else if (
					  /* Read more about handling dismissals below */
					  result.dismiss === Swal.DismissReason.cancel
					) { localStorage.setItem("ultimoTurno", getTurno());
					  swalWithBootstrapButtons.fire(
						'Cancelado',
						'Fazer as trocas de ops manualmente :)',
						'error'
					  )
					}
				  });
	}
}
/* parada:1019;turno:2;dia:11/8/2020 */
function salvarParadaDoTerminal(maquina, string) { /* salva a parada editada do terminal */
	localStorage.setItem("parada:" + maquina + ";turno:" + getTurno() + ";dia:" + getData(), string);
	let parada = localStorage.getItem("Horaparada:" + maquina + ";turno:" + getTurno() + ";dia:" + getData());
	localStorage.setItem("Horaparada:" + maquina + ";turno:" + getTurno() + ";dia:" + getData(), parada+"//"+getHoras());
}
function editarConsole(id) {
	document.getElementById("ordens").style.backgroundColor = "white";
	document.getElementById("p" + id).style.color = "black";
	document.getElementById("p" + id).style.fontWeight = "bold";
	let maquina;
	if (getVao() == 2) {
		maquina = listaMaquinas2[id];
	} else {
		maquina = listaMaquinas3[id];
	}
	let conteudo = document.getElementById("p" + id).textContent;
	let cnteudoEditado = conteudo.split(maquina);
	if(cnteudoEditado[1] == null || cnteudoEditado[1]=='' || conteudo==null || conteudo==''){
		// remove parada
		localStorage.removeItem("parada:" + maquina + ";turno:" + getTurno() + ";dia:" + getData());
		localStorage.removeItem("Horaparada:" + maquina + ";turno:" + getTurno() + ";dia:" + getData());
	}else{
		// salva nova parada
		salvarParadaDoTerminal(maquina, cnteudoEditado[1]);
	}	
}
function editarConsoleClick(id) {
	document.getElementById("ordens").style.backgroundColor = "black";
	document.getElementById("p"+id).style.color = "white";
	document.getElementById("p"+id).style.fontWeight = "bolder";
}
 function alertaInicial(){
		const Toast = Swal.mixin({
  			toast: true,
 			position: 'top-end',
  			showConfirmButton: false,
  			timer: 1500,
  			timerProgressBar: true,
  			onOpen: (toast) => {
    		toast.addEventListener('mouseenter', Swal.stopTimer)
    		toast.addEventListener('mouseleave', Swal.resumeTimer)
  		}
		});
		Toast.fire({
		icon: 'success',
  		title: 'Agora voce pode visualizar separadamente a primeira e a segunda parte do programa!'
		});
	}