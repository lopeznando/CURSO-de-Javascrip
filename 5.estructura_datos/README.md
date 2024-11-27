 # Estructura de Datos
 ## Indice
 [Array](#lista-o-array)
 [creacion](#creacion-1)
 [acceder a un elemnto del array](#acceder-a-un-elemento-del-array)
 [metodos](#metodos-1)
 [objetos](#objetos)
 [creacion](#creacion)
 [acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
 [metodos](#metodos)
 a partir de los datos primitivos javascript nos proporcionan los tipos de datos complejos conocidos tambien como datos estructurados o estructura de datos.
para poder trabajar con estos tipos de datos deberemos conocer la forma de representalos en la memoria de nuestra maquina.
javascript trabaja con dos tipos de datos estrjucturados que trabajan de manera independiente o en conjunto.
son los siguientes
## Lista o Array
las listas en `JS` son un tipo de dato estrocturado que almacena o puede guardar distintos datos primitipos separados por comas `,`, cada tipo de dato que se almacene en una lista se le conoce como elementos.
Asi cada elemento estara separado por una coma.
### creacion
primero debemos crear un enlace (una variable) y luego tentremos que asignarle un nombre, asignar una lista que se cree con corchetes separados por comas.
```js
//lista vacia
let milista=[]
//lista de numeros
let numeros=[1,2,3,4]
//lista de nombres
let nombres=["edwin","jory","adan","nadine"]
// lista mixta
let mixto=[1,"","edwin"]
```
### acceder a un elemento del array
para poder acceder a un elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especificpo este indice es incremental y comenzara de cero con el primer elemento, el ultimo elemento sera la cantidad de elementos menos uno.
```js
let numeros=[3,4,7,23,67,8]
console.log(numeros[2])
``` 
existe otra manera de acceder a los elementos de una lista, esto se logra con un bucle `for`
```js
let nombres=["cristian","jory","nando","edwin"]
for (let i=0;i<nombres.length;i++){
    console.log(nombres[i])
}
```
### metodos
son funciones que nos permite modificar crear y eliminar los elementos de una lista todas las variables que almacenen una lista nos permite acceder a sus metodos poniendo un punto despues del nombre de la variable.
- metodo para recuperar la longitud de elementos que tiene una lista.
```js
let numeros=[2,4,5,6,7]
numeros.length
```
- metodo para agregar un elemento al final de la lista
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el ultimo elemento de una lista.
```js
let vocales=["a","e"]
vocales.pop()
```
### Tarea averiguar los metodos mas usados que existen para el tratamiento de listas en javascript 
- shift()
Descripción: Elimina y devuelve el primer elemento de un array.
Sintaxis: `array.shift()`

```javascript
let frutas =['manzana', 'plátano', 'naranja'];
let primeraFruta = frutas.shift(); 
console.log(frutas);
console.log(primeraFruta);
```
- unshift()
Descripción: Añade uno o más elementos al principio de un array.
Sintaxis: `array.unshift(elemento1, elemento2, ..., elementoN)`
```javascript
let frutas = ['manzana', 'plátano'];
frutas.unshift('naranja');  
console.log(frutas); 
```
- concat()
Descripción: Combina dos o más arrays y devuelve un nuevo array.
Sintaxis: `array.concat(array2, array3, ..., arrayN)`
```javascript
let frutas = ['manzana', 'plátano'];
let masFrutas = ['naranja', 'pera'];
let todasFrutas = frutas.concat(masFrutas);
console.log(todasFrutas); 
- join()
Descripción: Une todos los elementos de un array en una cadena, separándolos con un delimitador (por defecto, una coma).
Sintaxis: `array.join(separador)`
```javascript
let frutas = ['manzana', 'plátano', 'naranja'];
let cadenaFrutas = frutas.join(', ');
console.log(cadenaFrutas); 
```
- slice()
Descripción: Crea una nueva copia superficial de una porción del array sin modificar el array original.
Sintaxis: `array.slice(inicio, fin)`
```javascript
let frutas = ['manzana', 'plátano', 'naranja', 'pera'];
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); 
```
- splice()
Descripción: Modifica el contenido de un array eliminando, reemplazando o agregando elementos.
Sintaxis: `array.splice(inicio, cantidad, elemento1, elemento2, ..., elementoN)`
```javascript
let frutas = ['manzana', 'plátano', 'naranja', 'pera'];
frutas.splice(1, 2, 'kiwi', 'sandía'); y 'sandía'
console.log(frutas); 
```
- forEach()
Descripción: Ejecuta una función en cada elemento de un array.
Sintaxis: `array.forEach(función)`
```javascript
Copiar código
let frutas = ['manzana', 'plátano', 'naranja'];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
```
- map()
Descripción: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
Sintaxis: `array.map(función)`
```javascript
let numeros = [1, 2, 3, 4];
let cuadrados = numeros.map(function(num) {
    return num * num;
});
console.log(cuadrados); 
```
- filter()
Descripción: Crea un nuevo array con los elementos que cumplen una condición.
Sintaxis: `array.filter(función)`
```javascript
let numeros = [1, 2, 3, 4, 5];
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log(numerosPares); 
```
- reduce()
Descripción: Aplica una función sobre un acumulador y cada elemento del array (de izquierda a derecha), devolviendo un único valor.
Sintaxis: `array.reduce(función(acumulador, valorActual))`

```javascript
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);  
console.log(suma); 
```
- find()
Descripción: Retorna el primer elemento del array que cumple con la condición proporcionada.
Sintaxis: `array.find(función)`
```javascript
let numeros = [1, 2, 3, 4];
let mayorQueTres = numeros.find(function(num) {
    return num > 3;
});
console.log(mayorQueTres); 
```
- some()
Descripción: Comprueba si al menos un elemento en el array cumple con la condición.
Sintaxis: `array.some(función)`
```javascript
let numeros = [1, 2, 3, 4];
let hayNumeroMayorQueTres = numeros.some(function(num) {
    return num > 3;
});
console.log(hayNumeroMayorQueTres); 
```
- every()
Descripción: Comprueba si todos los elementos del array cumplen con la condición.
Sintaxis: `array.every(función)`
```javascript
let numeros = [1, 2, 3, 4];
let todosSonPositivos = numeros.every(function(num) {
    return num > 0;
});
console.log(todosSonPositivos); 
```
## objetos
los objetos son tipos de datos estructurados similares a las lista, para poder acceder a un elemento de una lista javascript les asignava indices, en este caso los objetos como unica diferencia de las listas nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`
cada clave valor es un elemento de un objeto si deseamos crear  mas elementos tendremos que separarlos por comas
### creacion
para crear un objeto debemos encerrar los elementos en llaves `{}` cada elemento estara conformao por su `clave:valor`
```js
let datosJory=["jory","rodriguez",20,"M"]
let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodriguez",
  edad:20,
  sexo:"todos los dias",
  ganado:["el primo","los chamos","las enfermeras","mineros"],
  direccion:{
    tipoCalle:"pasaje",
    nombreCalle:"querobamba",
    numeroVivienda:222,
    numeroCuarto:5
  },
  accion:()=>{console.log("hola soy jory")}
}
```
## acceder a un elemento del objeto
### metodos 