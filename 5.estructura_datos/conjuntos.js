// crear una lista que almacene las cinco vocales y luego las muestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)
// acceder a la vocal "o"
// console.log(vocales[3])
// accediendo a loa elementos con for
// for(let i=0;i<5;i++){
//     console.log(vocales[i])
// }

//trabajo 
//tengo una lista de 7 frutas
//crear un programa que identifique si en mi lista existe naranja de existir me mostrara un mensaje de error.
// Definir la lista de frutas
let frutas =["manzana", "plátano", "mango", "uva", "naranja", "pera", "kiwi"];

if (frutas.includes("naranja")) {
    console.log("Error: La lista contiene la fruta 'naranja'.");
} else {
    console.log ("La lista no contiene 'naranja'.");
}


//crear dos funciones que reciben por parametros una lista de numeros una funcion encontrara se devolvera 
//el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista.
//ojo no usar los metodos de min y max.
// Función para encontrar el número menor
function encontrarMenor(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; 
        }
    }
    return menor;
}


function encontrarMayor(lista) {
    let mayor = lista[0];
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]; 
        }
    }
    return mayor;
}

let numeros = [34, 1, 99, -5, 67, 2];
let menor = encontrarMenor(numeros);
let mayor = encontrarMayor(numeros);

console.log("El número menor es:", menor);
console.log("El número mayor es:", mayor);

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
// Función para contar la cantidad de vocales 'a' en una lista
function contarVocalA(lista) {
    let contador = 0; 
    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i].toString(); 
        for (let j = 0; j < elemento.length; j++) {
            if (elemento[j].toLowerCase() === 'a') {
                contador++;  
            }
        }
    }

    return contador;
}


let listaDePalabras = ["una", "ella", "para", "mama", "papa"];

let cantidadDeA = contarVocalA(listaDePalabras);

console.log("Cantidad de vocales 'a' en la lista:", cantidadDeA);
