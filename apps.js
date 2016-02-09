/*apps.js
1- Hacer un programa en el que se ingrese un monto de dinero expresado en pesos y la cotización del dólar y luego imprima por pantalla el monto equivalente en dólares (con 2 dígitos decimales).


2- Maquina de boletos. Devolver el vuelto en la cantidad de monedas desde la mas grande y las mas chica. 

(Mas dificil stock de monedas).


3- Iniciales de una frase



*/

var cotizacionVenta=14.90;
var cotizacionCompra=13.95;

function cotizarPesos(){

var pesos=document.getElementById("pesos").value;
	getCompra(pesos);
	getVenta(pesos);

};

function getCompra(pesos){
	console.log('entro en compra');
	var compra= pesos * cotizacionCompra;
	document.getElementById("compra").value=compra;

};
function getVenta(pesos){
	var venta= pesos * cotizacionVenta;
	document.getElementById("venta").value =venta;

};

