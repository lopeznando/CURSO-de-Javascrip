# FUNCIONES
- [FUNCIONES](#funciones)
  - [estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funcones como valor](#funcones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)

## estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos.
1. hacer uso del keyword `function`.
2. darle un nombre a la funcion.
3. crear los paramtros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con parametros
function miFuncionParametros(a){
    console.log("tu parametro es",a)
}
//funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que recibira.
```js
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola",texto)
}
//ejecutar
saludo2("jory")
```
> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION**
> los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function crearUsuario(){

}
function enviarCorreo(){

}
```
## Tipos de Argumentos y Parametros
es la manera como se remplaza los argumentos con los parametros
### Argumentos y Parametros Posicionales
posicionales se le llama porque los argumentos tomaran los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(2,4,6,8)
console.log(repuesta)
```
### Argumentos y Parametros Nominales
se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
//nominal
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicion
registroAlumno("jory","rodriguez","todos los dias")
```
> [!INFO]
> Posicionales en orden y Nominales especificar el parametro y su valor
## Tipos de funciones por su notacion
### Funcones como valor
en este caso se crea una funcion como se fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis. 
al igual que una funcion clasica podemos tambien pasarle parametros.

### Funcion como declaracion 
