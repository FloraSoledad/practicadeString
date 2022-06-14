//Ejercicio: Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:
//Un texto.
//La palabra que vamos a buscar para reemplazar.
//La palabra que vamos a usar para reemplazar.
//La función deberá devolver el texto con la palabra reemplazada.//


/*Declaramos la función con sus parámetros*/
function reemplazoFastFast (texto,buscar,usar){
    //realizamos el replace con los parametros
    return texto.replace(buscar,usar);
  }
  /*Invocamos la función y le pasamos los tres parametros*/
  console.log(reemplazoFastFast("JavaScript no me permite aprender", "no", "si"))