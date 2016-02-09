/**
2- Maquina de boletos. Devolver el vuelto en la cantidad de monedas desde la mas grande y las mas chica.
*/


var valorBoleto =2.25;

var stockMonedas= 50;

var valores ={
	uno:1,
	cincuenta:0.50,
	veinticinco: 0.25,
	diez:0.10,
	cinco:0.05

};

//si ingreso una valor, y el boleto tiene un precio fijo. Considerando el stock, cuanto me tiene que devolver?
//
function vuelto(ingreso){
	return ingreso - valorBoleto;
}

function considerarVueltoEnMonedas(vuelto, valoresen){

	var resultado =calcularVuelto(vuelto, valoresen);

 	if(resultado %1 !=0){

		return resultado -resultado %1;
	}
	return  resultado;

}


function returnCero(num){
	if(num < 1){
		return 0
	}
	return num;
}
function calcularVuelto(vuelto, enmonedasde){
	var ret = vuelto/enmonedasde;
	return returnCero(ret);
}

function mostrar(){
//
var ingreso =document.getElementById('boleto').value;
//
var mivuelto =vuelto(ingreso);
//
document.getElementById('vuelto').value = mivuelto;
//
document.getElementById('cinco').value= considerarVueltoEnMonedas(mivuelto, valores.cinco);
//
document.getElementById('diez').value= considerarVueltoEnMonedas(mivuelto, valores.diez);
//
document.getElementById('veinticinco').value= considerarVueltoEnMonedas(mivuelto, valores.veinticinco);
//
document.getElementById('cincuenta').value= considerarVueltoEnMonedas(mivuelto, valores.cincuenta);
//
document.getElementById('unpeso').value= considerarVueltoEnMonedas(mivuelto, valores.uno);

}



