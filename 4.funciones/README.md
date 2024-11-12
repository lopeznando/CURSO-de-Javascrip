# FUNCIONES
- [FUNCIONES](#funciones)
  - [estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funcones como valor](#funcones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
    - [binding](#binding)
  - [la pila de llamadas](#la-pila-de-llamadas)
  - [CLOUSURE  o funciones de cierre(funciones que retorna funciones)](#clousure--o-funciones-de-cierrefunciones-que-retorna-funciones)
    - [clousure Tipo Clase](#clousure-tipo-clase)
    - [prototype (Tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)
  - [RECURSION EN FUNCIONES (tareas)](#recursion-en-funciones-tareas)
  - [FUNCIONES CALLBACK (tareas)](#funciones-callback-tareas)
- [CLASES](#clases)
  - [Estructura de una clase en JavaScript](#estructura-de-una-clase-en-javascript)

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
se le conoce como funcion declarativa a la manera clasica de como creamos un funcion.
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```
### Funcion de flecha (arrow function)
esta funcion es introducida a partir de la version de ecma script 5 `es5`.
se implemento para la creacion y ejecucion rapida  y mas entendible de las funciones.
la funcion flecha evita la `vervosidad` en javascript.
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la programacion para referirse a un codigo que necesita demasiadas lineas de codigo o necesita cumplir estrictamente una seria de reglas podemos comparar la `verbosidad` a un texto demaciadp extenso o redundante.
se crea de la misma manera que una funcion  como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura.
el parametro seguido del simbolo flecha `=>` y el cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola,",texto)
console.log(mensaje("el primo"))
//en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo (posicional)
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencias
las diferemnicas que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
### binding
es una tecnica que guarda las funciones y variables (enlaces) solamente sube al principio la declaracion no el valor del archivo javascript.
```js
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios primo"
}
```
```js
saludo()
edspedida()
```
## la pila de llamadas
es una tecnica que se usa para controlar de manera crrecta la ejecucion de una funcion.
**averiguar sobre LIFO**
```js
//programa que haga una ensalada
function cortarTomate() {
    console.log("cortando tomates")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino")
}
function cortarLimon() {
    console.log("cortando limon")
}
function preparaEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando las verduras")
}
function comer() {
    preparaEnsalada()
    console.log("comiendo la ensalada")
}
comer()
```

## CLOUSURE  o funciones de cierre(funciones que retorna funciones)
un `CLOUSURE` es una funcion que encapsula una serie de variables y defiinciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
antes de que aparesca la version `ecma script 6` los `clousure` eran un patrol creacional que nops permitira modularizar nuestro codigo, en lugar de usar las ○
`clases`, que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```js
//una funcion retorna otra funcion(por lo genral es una funcion anonima)
function retornaValor(n){
    return n+1
}
//llamado a la funcion clasica
retornaValor (10)

//funcion clousure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamado a la funcion closurure
retornaValor(10)()
```
>[!NOTE]
> las funciones `clousure` son usadas porque pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamda que se realice.
### clousure Tipo Clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en
java script tenemos funciones `clousure` que se oueden instanciar al igual que una clase , la direncia con las funciones `closure`
clasicas es que en esta hacemos uso de la palabra reservada `keyword` llama `this`.
```js 
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//realizamos la instancia
// let count1=new contador()
// count1.contador
// console.log(count1.contador)
// count1.incre()
// console.log(count1.contador)
let count1=new contador()
count1.conador
for(let i=0;i<5;i++){
    count.incre
}
```
>[!NOTE]
> la funcion clousure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` cada funcion o variable estara enlazada al objeto que se cree.

>[!WARNING]
> el probema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacio en la memoria para toda la clase y su valor creado eso quiere decir variable y funciones, cada vez que llamas a una funcion esta se replica en memoria.

### prototype (Tarea- averiguar y sus ejemplos)

En el contexto de closures en JavaScript, el término prototype no está relacionado de manera directa, pero es posible combinar ambos conceptos. Sin embargo, para aclarar la pregunta, primero explicaré brevemente qué es un closure y luego cómo se podría aplicar prototype dentro de ese contexto.

¿Qué es el Prototype en este contexto?
Cuando hablamos de prototype en el contexto de closures, podemos pensar en cómo una función, que puede ser utilizada como un "constructor" para crear objetos, puede aprovechar el prototipo para compartir métodos y propiedades entre las instancias de los objetos creados con dicha función. Los closures pueden estar involucrados en las funciones constructoras si necesitamos preservar algún estado privado mientras se usan métodos del prototipo.

Ejemplo de Prototype con Closure en JavaScript
Imaginemos que tenemos una función constructora que usa un closure para mantener un valor privado, mientras que los métodos que operan sobre ese valor se agregan al prototipo de la función constructora. Así, cada instancia puede compartir los mismos métodos, pero el valor privado es único para cada instancia.

```js
// Función constructora
function CuentaBancaria(saldoInicial) {
  // Variable privada usando closure
  let saldo = saldoInicial;

  // Método público que permite acceder al saldo privado
  this.obtenerSaldo = function() {
    return saldo;
  };
}

// Añadimos un método al prototype de CuentaBancaria
CuentaBancaria.prototype.depositar = function(monto) {
  saldo += monto;
  console.log(`Deposito de $${monto}. Nuevo saldo: $${saldo}`);
};

CuentaBancaria.prototype.retirar = function(monto) {
  if (monto <= saldo) {
    saldo -= monto;
    console.log(`Retiro de $${monto}. Nuevo saldo: $${saldo}`);
  } else {
    console.log("Saldo insuficiente.");
  }
};

// Creamos una nueva instancia
const cuenta1 = new CuentaBancaria(1000);
console.log(cuenta1.obtenerSaldo()); // 1000

cuenta1.depositar(500); // Deposito de $500. Nuevo saldo: $1500
console.log(cuenta1.obtenerSaldo()); // 1500

cuenta1.retirar(200); // Retiro de $200. Nuevo saldo: $1300
console.log(cuenta1.obtenerSaldo()); // 1300
```

## RECURSION EN FUNCIONES (tareas)
## FUNCIONES CALLBACK (tareas)
# CLASES 
Las clases en javascript llegan en la version `ECMAScript6`, javascript no tenia al igual que en otros lenguajes de programacion orientadas a objetos las `clases` ya que javascript se enfocaba en la `programacion funcional` sin embargo con la llegada de `ES6` adopta ser un lenguaje de programacion multiparadigma, entre ellos la `programacion orientada de objetos` con la llegada de las `clases`.
## Estructura de una clase en JavaScript
Una clase esta separada en tres grandes secciones.
1. El nombre de la clase que debera ser en `sigular y PascalCase`.
2. Debera tener atributos (valor, variable) estos deberan ser `sustantivos` y estar escrito en `CamelCase`.
3. Debera tener metodos (acciones, funciones) estos deberan ser verbos u estar escritos en `CamelCase`.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca="marca"
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){
        return "estoy encendiendo..."
    },
    apagar(){
        return "estoy cerrando cesion..."
    },
    escribir(){
        return "estoy haciendo un informe"
    }
    jugar(){
        return "estoy jugando"
    }
}
//instanciar
let miPC=new Computadora(gigabyte)
miPC.endender()

```
 