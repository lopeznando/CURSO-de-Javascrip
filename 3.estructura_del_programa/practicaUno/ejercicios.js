//EJERCICIO 1

let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));

console.log((numero1 * numero2 > 100) ? "El producto es mayor a 100." : "El producto no es mayor a 100.");

//EJERCICIO 2

const contraseñaCorrecta = "123";

let contraseñaUsuario = prompt("introduce la contraseña:");

if (contraseñaUsuario === contraseñaCorrecta) {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta.");
}

//EJERCICIO 3

let numeroUsuario = Number(prompt("Introduce un número:"));

