♠# Estructura del programa
## Indice
- [Indice](#indice)
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
- [Expresiones y Declaraciones](#expresiones-y-declaraciones)
- [Bindings (enlaces)](#bindings-enlaces)
- [El entorno](#el-entorno)
- [control de flujo](#control-de-flujo)
  - [Ejecucion Condicional](#ejecucion-condicional)
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