/*Convertir en numeros un telefono: 0800-SUSANA*/


function convertirLetrasANumeros(){

var resultadoNumeros =[];

	var valorIngresado =document.getElementById('llamaAl').value;

	var split = valorIngresado.split("");
	for(var i = 0; i< split.length; i++){
		
    var digito = split[i];

		if(digito==='-'){
			resultadoNumeros.push(digito);

		}else if(isNaN(digito)){
			
			var miNumero = devolverNumeros(digito);
			resultadoNumeros.push(miNumero);

		}else{
			var toI = parseInt(digito);
			resultadoNumeros.push(toI);
		}
	}

	document.getElementById('numero').value=resultadoNumeros.join("");

}


function devolverNumeros(unaLetra){
		var letra =unaLetra.toLowerCase();
    var numero ;

	switch(letra){

   case "a":
   case "b":
   case "c":
       numero= 1;
       break;

   case "d":
   case "e":
   case "f":
      numero=2;
       break;
      
   case "g":
   case "h":
   case "i":
       numero= 3;
       break;

   case "j":
   case "k":
   case "l":
      numero= 4;
       break; 

   case "m":
   case "n":
       numero= 5;
       break;

   case "o":
   case "p":
   case "q":
      numero=7;
       break;    

  	case "r":
   case "s":
   case "t":
       numero= 8;
       break;

   case "u":
   case "v":
   case "w":
      numero= 9;
       break;
    case "x":
   case "y":
   case "z":
    numero= 0;
 	default:
       numero= "-";
       break;

}
return numero;
}



