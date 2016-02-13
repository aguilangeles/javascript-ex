/*hacer un contador de palabras y guardarlo en un array*/

//var oracion = "esta es una oracion compleja no una oracion simple";

var miContadordePalabras = {

	contar : function contarPalabras(){
		var objeto = {};

		var oracion = document.getElementById('oracion').value;	
		
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
	},

	mostrar: function recorrerObjeto(){
	
		var objeto = this.contar();

		var resultado=[];
		var ul = 	document.getElementById('milista');
		
		for ( prop in objeto){

			var palabra ='\n' + prop + ' :  ' + objeto[prop];

			var li = document.createElement('li');
            li.setAttribute('class','list-group-item');
            li.appendChild(document.createTextNode(palabra));
			ul.appendChild(li);
			
		}

	}

};

window.APP = miContadordePalabras;


