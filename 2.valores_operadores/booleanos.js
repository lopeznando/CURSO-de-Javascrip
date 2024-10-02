// ejemplos con operadores ded comparacion
console.log(5>6)
//esta operacion me generara un valor de tipo boleano

//mayor igual que
console.log(6>=6)

//no es igual
console.log(5!=4)

//NaN == NaN
console.log(NaN==NaN)

//Averiguar la forma en la que se realizan las comparaciones con cadena de texto
/*Representación de Cadenas en Memoria:
Las cadenas de texto en JavaScript están representadas internamente utilizando la codificación UTF-16. Cada carácter de la cadena se almacena como una secuencia de bits (0s y 1s) que corresponde a su valor Unicode.

Ejemplo:
La letra "A" en Unicode es 65, que en binario se representa como 01000001.
La letra "a" en Unicode es 97, que en binario se representa como 01100001.
 Comparación de Cadenas:
Cuando se comparan cadenas, JavaScript evalúa cada carácter en la cadena en su forma binaria. Las comparaciones se realizan de manera lexicográfica (alfabética) basándose en el valor Unicode de cada carácter.

Proceso de Comparación:
Comparación Carácter por Carácter: Cuando se comparan dos cadenas, JavaScript empieza desde el primer carácter y sigue comparando hasta que encuentra un carácter diferente o llega al final de una de las cadenas.

Uso de Valores Unicode: Cada carácter se compara en función de su valor Unicode. Por ejemplo, "A" (65) es menor que "a" (97) porque 01000001 es menor que 01100001 en la representación binaria.*/


//todas las letras mayusculas seran menores a las minusculas
// Z>a
//por que javascript compara los codigos unicode de cada caracter
// ! >= ?
// 33 >= 63
console.log("!">="?")
//Ardvark < Zoroaster
console.log("Ardvark" < "Zoroaster")

//en el caso del operador && AND su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)
console.log(true && true)
//OBSERVACION: si ambos valores son verdaderos devolera el segundo valor.
console.log("hola" && "mundo")
//OBSERVACION: en caso exista una valor verdadero y uno falso devolvera el valor falso.
console.log(0 && "hola")
//OJ0: los valores 0,NaN y una cadena vacia "" son considerados false.

//en el caso del operador || OR produce verdadero si cualquiera de sus valores dados es verdadero
console.log(false || false)
console.log(true || false)

respuesta="te devuelvo los ositos tiernos"
console.log(respuesta || "tu busqueda  no existe")

//en el caso del operador ! NOT invierte el valor dado
console.log(!true)
console.log(!false)

// usando el operador relacional
//observacion solo funciona en objetos o listas

//averiguar porque sale false en este caso.
console.log("hola" in ["hola" , "mundo"])
/*La expresión console.log("hola" in ["hola", "mundo"]) devuelve false porque el operador in en JavaScript se utiliza para verificar si una propiedad existe en un objeto o si un índice existe en un array.

Explicación del Uso de in
Operador in: Este operador comprueba si una propiedad específica está presente en un objeto. Su sintaxis es propiedad in objeto.

Arrays como Objetos: Aunque los arrays son objetos en JavaScript, el operador in no busca el valor en el array. En su lugar, verifica si la propiedad (o índice) existe en el array.*/
