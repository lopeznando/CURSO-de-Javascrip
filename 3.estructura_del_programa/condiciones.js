//EJEMPLO DE CONDICON SIMPLE
//capturamos la edad y convertimos a numero
let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
if (typeof edad == "number"){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
    console.log(edad*edad)
}

//EJEMPLO DE UNA CONDICION SIMPLE DE UNA SOLA LINEA
if (1+1==2) console.log("es verdad");
//EJERCICIO DE CONDICIPONES
//Crear un programa que pida al usuario su edad y dependiendo su edad le daremos su regalo
//REGALOS
/**
 * si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * si su edad esta entre 9 a13 años: te ganaras una pelota firmada por cuto
 * si su edad esta entre 14 a 17 años: te ganaras un celular nokia
 * si su edad es mayor o igual a 18 años: te ganaras al primo
 */
//  let edadUsuario=Number(prompt("ingresa tu edad"))
//  if (edadUsuario >4 && edadUsuario <8 ){
//     console.log("te ganaras un chupetin")  
//  }
//  else if (edadUsuario>9 && edadUsuario <13){
//     console.log("te ganaras una pelota")
//  }
//  else if (edadUsuario>14 && edadUsuario <17){
//     console.log("te ganaras un celular nokia")
//  }
//  else if (edadUsuario>=18 && edadUsuario <100){
//     console.log("te ganaste al primo")
// }
// else{
//     console.log("no tienes la edad necesaria")
// }

let edadUsuario=Number(prompt("ingresa tu edad"))
    switch (edadUsuario){
      case edadUsuario>4 && edadUsuario <8:
         console.log("te ganaras un chupetin")
         break 

      case edadUsuario>4 && edadUsuario <8:
         console.log("te ganaras una pelota")
         break

      case  edadUsuario>14 && edadUsuario <17:
         console.log("te ganaras un celular nokia")
         break

      case edadUsuario>=18 && edadUsuario <100:
         console.log("te ganaste al primo")
         break
      default:
   console.log("no tienes la edad necesaria")
   
}
//EJRCICIO
//realizar un programa que pida 5 frutas a travez del
//navegador.
//y realizar las siguientes evaluaciones
//naranja,limon: "es una fruta citrica"
//platano, manzana: "es una fruta dulce"
//fresa,pera,papaya: "para la ensalada de fruta"
//si engresa otro tipo de frutas: "no tiene clasificacion"
for (let i=1;i<=5;i++){
   let fruta=prompt("escribe el nombre de tu fruta")
   switch(fruta){
      case "naranja":
      case "limon":
         console.log(fruta,"es una fruta citrica");
         break;
      case (fruta=="manzana" || fruta=="platano"):
         console.log(fruta,"es una fruta dlucw");
         break;
      case "fresa":
      case "pera":
      case "papaya":
         console.log(fruta,"para la ensalada de fruta");
         break;
      default:
         console.log("primo es una fresita")
         break; 
   }
}

