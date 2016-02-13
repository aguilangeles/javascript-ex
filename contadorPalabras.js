/*hacer un contador de palabras y guardarlo en un array*/

//var oracion = "esta es una oracion compleja no una oracion simple";


function contarPalabras(oracion){

	var objeto = {};

	var split = oracion.split(" ");

	for(var i = 0; i< split.length; i++){

		var key = split[i];

		if(!objeto[key]){
			
			objeto[key]=1 ;

		}else{
			objeto[key]++;
		}			
		
	}
	return objeto;
}

function recorrerObjeto(){

	var oracion = document.getElementById('oracion').value;	

	var objeto = contarPalabras(oracion);

	var resultado=[];
	for ( prop in objeto){

		var palabra ='\n"' + prop + '":  ' + objeto[prop];
		
		resultado.push(palabra);
	}
	
	document.getElementById('palabras').value= resultado;
}
