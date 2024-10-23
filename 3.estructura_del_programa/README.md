♠# Estructura del programa
## Indice
- [Indice](#indice)
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
- [Expresiones y Declaraciones](#expresiones-y-declaraciones)
- [Bindings (enlaces)](#bindings-enlaces)
- [El entorno](#el-entorno)
- [control de flujo](#control-de-flujo)
  - [Ejecucion Condicional](#ejecucion-condicional)
  - [Bucles](#bucles)
## interaccion basica con el usuario
podemos interactuar con el usuario desde Javascript utilizando un metodo sencillo que biene implementado en los navegadores.
el metodo es conocido como `window`o el metodo de `ventana` este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos `Aceptar` (true) y `cancelar` o `cerrar` (false)
```js
window.confirm("quieres ser mi enamorado")
//si deseamos capturar las respuesta almacenaremos el codigo en una codigo
respuesta=window.confirm("quieres salir del closed!!?")
```
- **prompt** pregunta al usuario y espera que se ingrese una respuesta
```js
window.prompt("como te llamas primo")
//si deseamos almacenar la respuesta crearemos una variable
respuesta=window.prompt("como te llamas primo")
```
## Expresiones y Declaraciones
- **Expresiones** en javascript un fragmento de codigo que produce un valor es llamada `Expresion`. tambien se dice que una `Expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declaraciones** en javascript es una oracion
```js
!true;
let estado=!false;
```
## Bindings (enlaces)
cuando creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
el bindings o enlace es la manera que javascript recuerda los valores y mantiene una entrada interno asi como la reutilizacion de valores.
**como lo usamos los bindings en javascript**
para usar el bindings primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
// este es un enlace que puede apuntar a varios valores como un pulpito con muchos brazitos.
let edadPersona = 34
// si deseamps que nuestro enlace solo apunte a un valor osea un pulpito con un brazito entonces para crear este enlace debemos hacer uso de la keyword const.

const edad=45
// este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor.
```
> [!NOTE]
> **que nombre ponerle a nuestros enlaces** - el nombre de un enlace debera describir el valor al que esta enlasado, y debera estar escrita en `camelCase`
```js
//quiero crear un enlace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd="20240910"
//correcto
let fechaActual="09-10-2024"
//correcto
let edadActualAumno=20
```
## El entorno
Es conocido como el momento en el que se ejecuta o inicia un archivo javascript.
el entorno al crearse no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.
**Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en javascript.
## control de flujo
una sentencia se ejecuta como si fuera una historia de arriba abajo.
por ejemplo:
```js
let elNumero= Number(prompt("Elige un numero"))
console.log("tu numero es la raiz cuadrada de:"+ elNumero*elNumero)
// primero le pide al usuario un numero y despues muestra un mensaje y el cuadro de ese numero
```

### Ejecucion Condicional
hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.
**como creamos una condicion**
la ejecucuion condicional se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.
**condicion simple `if`**
```js
if true{
  let comparacion=5>4
  prompt("escribe tu nombre")
}
```
- **condicion simple `if` de una sola linea**
```js
if (1+1==2) console.log("es verdad")
```
- **condicion de doble evaluacion `if else`**
existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. ejecucion condicional de dos caminos.
```js
let edadPersona = 16;
if (edadPersona >= 18){
  console.log("eres mayor de edad");
}else{
  console.log("eres menor de edad");
}
```
**condicion multiple `if` `else if`**
se utiliza cunado se tiene evaluar y devolver varias opciones o multiples respuestas.
```js
let total_compra=105
if (total_compra > 50 && total_compra <100){
  console.log("tiene un descuento de 10%")
}
else if (total_compra > 100 && total_compra <500){
  console.log("tienes un descuento del 20%")
}else{
  console.log(tienes un descuento del 50%)
}
```
//EJECUCUION CON LA MULTIPLICACION DEL PORCENTAJE %
```js
let total_compra=105
if (total_compra > 50 && total_compra <100){
  console.log("tiene un descuento de 10%"${total_compra*0.10})
}
else if (total_compra > 100 && total_compra <500){
  console.log("tienes un descuento del 20%"${total_compra*0.20})
}else{
  console.log("tienes un descuento del 50%"${total_compra*0.50})
}
```
**condicion multiple `switch`**
java script dsipone de una opcion para crear estructuras condicionales multiples. `switch`  permite crear estructuras mas optimisadas para cubrir un amplio abanicp de posibilidades.
```js
let edad=Number(prompt("ingrese su edad"))
switch (edad){
  case 4:
    console.log("tienes 4 años")
    break
  case 8:
    console.log("tienes 8 años")
    break
  default:
    console.log("tienes:",edad)
    break
}
```
### Bucles
Consideremos el siguiente problema
Crear un programa que imprima los numeros que imprima los numeros del 1 al 12 una forma de hacerlo seria el siguiente
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
el ejemplo anterior es valido pero la idea cuando programas es hacer menos trabajo no mas en el ejercicio anterior tendriamos problemas si deseamos mostrar todos los numeros menores a 1000.
Necesitamos una manera de ejecutar un fragmento de codigo multiples veces. a esta forma de control de flujo se le llama `bucle`.
para crear un bucle tenemos dos formas de hacerlo
1. `while` - para hacer uso de este bucle primero debemos usar la palabra clave `while` este aus ves como el if debera tener una condicion si esta condicion es verdad el bucle se ejecutara indefinidamente en caso la condicion sea falsa el bucle no sera ejecutado, al igual que el if luego de darle la condicion crearemos el cuerpo donde escribiremos al codigo que deseamos ejecutar.
```js
while (true){
  console.log("hola")
}
```
2. `for` esta es la manera mas abreviada de crear un blucle en javascript, en el caso de while necesitamos una variable contador luego la condicion y finalmente el aumento de contador. en el caso de `for` estos tres pasos se realizan en una sola linea.
```js
for (let contador=2;contador<=20;contador+1){
  if (contador%2==0) console.log(contador)
}
```
>  [!TIP]
> `while` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion de una intervencion externa. 
> `for` se usa cuando sabemos la cantidad de veces que deseamops ejecutar el codigo.
> [!NOTE]
> para terminar un bucle se hace uso de la palabra reservada `break` 