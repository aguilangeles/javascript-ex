/*apps.js
1- Hacer un programa en el que se ingrese un monto de dinero expresado en pesos y la cotización del dólar y luego imprima por pantalla el monto equivalente en dólares (con 2 dígitos decimales).
*/


function cotizarPesos(){


var pesos=document.getElementById("pesos").value;
var cotizacion=document.getElementById("dolar").value;

	var resultado= pesos / cotizacion;
	document.getElementById("resultado").value=resultado;
	


};




