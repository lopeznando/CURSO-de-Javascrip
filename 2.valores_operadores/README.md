# Valores, Tipos y Operadores
## Indice
- [Valores, Tipos y Operadores](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [valores](#valores)
    - [datos primitivos](#datos-primitivos)
      - [- Numeros(Number)](#--numerosnumber)
      - [Aritmetica (operaciolnes aritmitico)](#aritmetica-operaciolnes-aritmitico)
      - [Cadenas](#cadenas)
      - [Concatenacion](#concatenacion)
      - [plantillas literales](#plantillas-literales)
      - [Operadores Unarios](#operadores-unarios)
      - [Valores Boleanos](#valores-boleanos)
## valores
Imagina unmar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
- tipos (tipos de datos)
- operadores
  cuando nostros programamos hacemos uso de la `memoria de trabajo`, para trabajar de manera ordenada con con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeñas partes o piezas de informacion a esto se le conoce como `valores`.
  cada valor tiene una funcionalidad distinta puede ser un numero un texto o un funcion.
  cuando hablamos de tipos de datos en javascript nos referimos a su representacion binaria y al tipo de valor que usamos.
  ### datos primitivos
  son aquellos datos que ya existen, actualizasdos ni eliminados solo pueden ser llamados para el uso que deseamos darle.
  #### - Numeros(Number)
  los valores de tipo numericol, como es de esperar son numeros yne javascript se escribe o se hace el llamado de este valor de la siguiente manera
  - numero de tipo entero
  ```js
  // entreo positivo
  20
  // entero negativo
  -20
  ```
  ```js
  20 
  //estamos usando un patron de bits para el numero 20 que existiera dentro de la memoria de trabajo
  ```
  - numero de punto flotante decimal fraccion
  ```js
  // decimal positivo
  2.7
  0.
  .0
  // decimal negativo
  -3.6
  ```
  - numeros notacion cientifica
  ```js
  2.998e8
  //^2.998 * 10^8
  ```
  - numeros especiales
  en javascript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
   ```js
   Infinity
   - Infinity
   NaN
   //not a number
   //no es un numero
   //cuando el resultado de una operacion es matematicamente imposible
   ```
  
  >[!WARNING]
  cuando javascript realiza operaciones con numeros enteros el resultados siempre sera exacta, cuando realize operaciones con numeros decimales el resulatado perdera precision porque solo tiene 64 bits para almacenar el numero esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores** 
  >[!TIP]
  
  >cuando javascript hace trabajo de memoria(cuando crea un patron de bit para almacenar) todo numero son almacenados como decimal positivo.

   #### Aritmetica (operaciolnes aritmitico)
   la principal operacion que se puede hacer con numero es la aritmetica.
   para esto tenemos los operadores Aritmeticos como:
   - suma (+)
   - resta (-)
   - multiplicacion (*)
   - divicion (/)
   - potencia (**)
   - modulo (%)
  **podemos agrupar operacion con parentesis () las operacionesque esten entre los parentesis se ejecuta primero**
  consulta el archivo de operadores
  [aqui](./operadores.js).
  ve los ejercicios [aqui](./ejercicios.js)

 #### Cadenas
El siguiente tipo de dato primitivo es la `cadena` - `string`.
¿Para que se usan las cadenas en javascript?
- para representar texto
se escribe encerrando su contenido entre comillas
```js
//cadenas con contenido
"soy un texto" //comillas dobles
'tambien soy un texto' //comillas simples
`yo tambien soy` //acento grave, se integro en enma script 6

//cadena vacia
""
```
**Problema** - como representamos un texto entre comillas
para hacder el uso de comillas dentro del contenido de una caeena podemos seguir las siguientes recomendaciones
```js
//si nuestro texto tiene que estar entre comillas siples.
"'este texto se muestra entre comillas simples'"
//si nuestro texto tiene que estar entre comillas dobles.
'"este texto se muestra entre comillas dobles"'
//si nuestro texto tendra tanto comillas dobles como simples
`'esta en comillas simples', "esta en comillas dobles"`
```
otra manera de hacer lo antes mencionado es haciendo uso de la barra invertida `\` tambien conocida como `caracter de escape`
hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
//si nuestro texto tiene que estar entre comillas siples.
```js
"de este texto solo esta \"palabra\" estara en comillas"
//antes se trabajaba con esto \
```
**Problema** - deseamos agregar un salto de linea en nuestro texto.
```js
// solucionamos esge problema haciendo uso de los acentos graves
`primera linea
segunda linea`
```
antes de la incorporacion de es6 en el uso de acentos graves se utilizava el caracter de escape `\`
```js
" esta es mi primera linea \n y esta es la segunda linea"
```
**Problema** - deseo tabular un texto
```js
`
este texto no esta tabulado
  este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del caracter de escape
```js
"sin tabular \n\t y tabulado"
"esta es una barra invertida \\"
```
#### Concatenacion
El unico operador aritmerico que puede ser usado por cadenas es el operadro de suma (+) puede ser usado entre dos o mas cadenas y pasa a llamar operador de concatenacion, lo que realizar es unir cadena en una sola.
```js
"hola"+" "+"mundo"
```
#### plantillas literales
las plantillas literales mencionadas anteriormente con el nombre de acentos graves son usadas para mostrar texto literal, tambien nos permite ejecutar codigo en javascript dentro de una plantilla literal el codigo o el resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre.
para hacer uso de esta funcionalidad debemos usar, la siguiente expresion `${}`.
```js
//creando una plantilla literal - template literals
``
//usando js dentro de una plantilla literal
`la suma de 1+1 es = ${1+1}`
```
> [!TIP]
> se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola

#### Operadores Unarios
No todos los operadores son simbolos, algunos se escriben como palabras.
Un ejemplo es el operador `typeof` este operador produce un valor de cadena que indica el tipo del valor que le proporsionamos.

`operadores binanirios` se les conoce por operan sobre dos valores `2*5`
`operador unario` por que solo trabaja con un valor

```js
//para ver su funcionalidad o el valor que genera siempre debemos mostrarlo en un console
// es el unico operador unario
console.log(typeof 5)
```
#### Valores Boleanos
este tipo de dato primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades, como `si` y `no` o `encendido` y `apagado`.
Para este proposito, JavaScript tiene un tipo de dato `Booleano`, que tiene solo dos valores, `true` y `false`
**que formas de producir valores voleanos tenemos**
1. **Usando operadores de comparacion**
   los operadores de comparacion son los siguientes
   - Mayor que (>).
   - Menor que (<).
   - Mayor o igual que (>=).
   - Menor o igual que (<=).
   - Igual a (==).
   - Extrictamente igual (===).
   - No es igual a (!=)
2. **Usando los Operadores Logicos**
  Javascript soporta tres operadores logicos
  - and (y) representacion en javascript `&&`
  - or (o) representacion en javascript `||`
  - not (no) representacion en javascript `!`
  **Observacion** este es un operador unario que su funcion es invertir el valor que tiene a su derecha `!true` produce `false`