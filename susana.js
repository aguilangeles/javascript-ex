

/*TODO refactor*/




function devolverLetras(){

var array =[];

	var value =document.getElementById('llama').value;

	var split = value.split("");
	for(var i = 0; i< split.length; i++){
		var digito = split[i];

		if(digito==='-'){
			array.push(digito);
		}else if(isNaN(digito)){
			//console.log('que pasa aca ' + digito)
			var miNumero = devolverNumeros(digito);
			array.push(miNumero)
		}else{
			var toI = parseInt(digito);
			array.push(toI);
		}
	}
	document.getElementById('numero').value=array.join("");

}


function devolverNumeros(unaLetra){
		var numero ;
	switch(unaLetra){

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
 	default:
       numero= 0;
       break;

}
return numero;
}



