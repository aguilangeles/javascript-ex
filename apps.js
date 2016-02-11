/*apps.js
1- Hacer un programa en el que se ingrese un monto de dinero expresado en pesos y la cotización del dólar y luego imprima por pantalla el monto equivalente en dólares (con 2 dígitos decimales).


2- Maquina de boletos. Devolver el vuelto en la cantidad de monedas desde la mas grande y las mas chica. 

(Mas dificil stock de monedas).


3- Iniciales de una frase



*/



function cotizarPesos(){


var pesos=document.getElementById("pesos").value;
var cotizacion=document.getElementById("dolar").value;

	var resultado= pesos / cotizacion;
	document.getElementById("resultado").value=resultado;
	


};

function getCompra(pesos, cotizacion){
	console.log('entro en convertir');
	

};


