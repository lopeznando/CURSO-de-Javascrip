//EJERCICIOS
//CREAR UNA FUNCION QUE ME DE UN SALUDO DE BIENBENIDA
// function saludo(){
//     console.log ("bienvenido")
// }
// //funcion como valor
// let saludo=function(){
//     console.log("bienvenido")
// }
// saludo()

//bindig en javascript lo que hace es subir las funciones declarativas a la cabecera de mi archivo

// function despedida(){
//     return "adios"
// }
console.log(despedida())
// en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo
//la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar
//las funciones desúes de haberlo creado
let saludo=()=>{return "hola primo"}
console.log(saludo())
// en este caso de la funcion declarativa el binding eleva toda la funcion al principio 
//del archivo por eso debemos ejecutar la funcion desde cualquier parte del archivo incluso
//antes de que sea creada
function despedida(){
        return "adios"
    }