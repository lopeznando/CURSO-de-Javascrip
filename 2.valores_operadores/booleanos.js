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