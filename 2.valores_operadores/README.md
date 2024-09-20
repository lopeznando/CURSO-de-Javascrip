# Valores, Tipos y Operadores
## Indice
- [tipos de datos o valores](#valores)
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
  ```js
  20 
  //estamos usando un patron de bits para el numero 20 que existiera dentro de la memoria de trabajo
  ```
  - numero de punto flotante decimal fraccion
  ```js
  2.7
  0.
  .0
  ```
  - numeros notacion cientifica
  ```js
  2.998e8
  //^2.998 * 10^8
  ```
  >[!WARNING]
  cuando javascript realiza operaciones con numeros enteros el resultados siempre sera exacta, cuando realize operaciones con numeros decimales el resulatado perdera precision porque solo tiene 64 bits para almacenar el numero esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores** 
  >[!TIP]
  
  >cuando javascript hace trabajo de memoria(cuando crea un patron de bit para almacenar) todo numero son almacenados como decimal positivo.