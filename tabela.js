function getLastShift(){
    if((getTurno()-1)==0){return 3}else{return getTurno()-1}
}
function manin(vao, produzido){
	const turno = getLastShift();
	var lista;
 if(vao==2){
	  lista = listaMaquinas2;
 }else{;
	 lista  = listaMaquinas3
 }
 
$.each(lista,function(index,obj)
{
	$('#corpo-do-relatorio').append('<tr>');
	 $('#corpo-do-relatorio').append('<td>'+obj+'</td>');
	  $.each(produzido,function(index,obj){
		 $('#corpo-do-relatorio').append('<td>'+obj+'</td>');
			$('#corpo-do-relatorio').append('<td>'+obj+'</td>');
			$('#corpo-do-relatorio').append('<td>'+obj+'</td>');
			 $('#corpo-do-relatorio').append('<td>'+obj+'</td>');
	  }
		  $('#corpo-do-relatorio').append('</tr>');
});
}