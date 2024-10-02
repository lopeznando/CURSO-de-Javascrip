♠# Estructura del programa
## Indice
- [Indice](#indice)
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
- [Expresiones y Declaraciones](#expresiones-y-declaraciones)
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