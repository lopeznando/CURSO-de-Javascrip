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
// console.log(despedida())
// // en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo
// //la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar
// //las funciones desúes de haberlo creado
// let saludo=()=>{return "hola primo"}
// console.log(saludo())
// // en este caso de la funcion declarativa el binding eleva toda la funcion al principio 
// //del archivo por eso debemos ejecutar la funcion desde cualquier parte del archivo incluso
// //antes de que sea creada
// function despedida(){
//         return "adios"
//     }

//ejercicio crear una funcion que tenga o almacene una variable
//contador y podamos con funciones realizar la suma de uno de esta
//variable y la resta mas uno de la misma variable ademas de poder
//tener una funcion que me perimita acceder al valor actual y poder 
//mostrarlo.
//let contador=0
//function incremento
//return contador++
//function decremento
//return contador --
//function valorContador
//return contador
function contador(){
    //variable local
    let contador=0
    function incre(){
        return contador++
    }
    function decre(){
        return contador--
    }
    function valueCount(){
        console.log(contador)
    }
    return {
        valueCount,
        incre,
        decre
    }
}
let count1=contador()
count1.valueCount()
count1.incre()
count1.valueCount()
for(let i=0;i<5;i++){
    count1.incre()
}
count1.valueCount()
let count2=contador()
for(let i=0;i<5;i++){
    count2.decre()
}
count2.valueCount()
