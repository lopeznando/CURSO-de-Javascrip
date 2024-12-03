# DOM-Documento Object model
modelo de documento de objeto
el DOM es un conjuto de utilidades especificamente diseñadas para manipular documentos html.
el DOM trabsforma el archivo HTML en un arbol de nodos jerarquico. 
facilmente manipulables.
el DOM convierte todo el contenido del archivo HTML en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo"></h1>
    <p classO="oarrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>
```
- **mi archivo script.html**
```js
document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"tutulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            Text:"ese es la descripcion de mi pagina",
            child:null
        },
        {
             Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:null,
                    Text:"Primer elemento",
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"segundo elemento",
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"tercer elemento",
                    child:null
                }
            ]
        }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de javascript, nos ofrece una `API` (Aplicacion Programing Interfacez - Interfaz de Programacion de Apliaciones).

## Selectores 
los selectores nos permiten obtener o capturar una o varias etiquetas `html` incluyendo sus atributos, contenido e hijos si los  tuviera.
los selectores que podemos utilizar son variados podemos capturar etiquetas a travez de sus atrubutos como de el nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos` y son los siguientes:
- **getElementById** - devuelve un elemento (etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - Devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
```
```js
let parrafo=document.getElemtByClassName("parrafo")
```
- **querySelector** - Devuelve el primer elemento que coincida con el selector ingresado puede ser un id, class, name o tag.
  
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subtitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos existe para recorrer el DOM tiene JavaScript**

1. **getElementsByTagName** Selecciona todos los elementos que tienen un nombre de etiqueta específico. También devuelve una colección de nodos.
  ```js
  let elementos = document.getElementsByTagName('div')
  ```
2. **querySelectorAll** - Selecciona todos los elementos que coinciden con el selector CSS proporcionado. Devuelve una NodeList (similar a un array).
```js
  let elementos = document.querySelectorAll('.miClase');
```  
3. **children** - Similar a childNodes, pero solo devuelve los elementos hijos (ignora los nodos de texto y comentarios).
```js
let elementosHijos = document.getElementById('miId').children;
```
4. **parentNode** -  Selecciona el nodo padre de un elemento.
```js
let padre = document.getElementById('miId').parentNode;
```
## Manipulacion del DOM 
- **createElement** - Este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - Nos permite hacer hijo un elemento dentro de otro.
```js
let titulo=document.createElement("h1")
let body=document.querySelector("body")
body.appendChild(titulo)
```
- **parentNode**
 Devuelve el nodo padre de un elemento.
```js
const parent = document.getElementById('miElemento').parentNode;
```
- **parentElement**
 Devuelve el nodo padre de un elemento, pero específicamente solo elementos del DOM (en lugar de cualquier tipo de nodo, como parentNode).
```js
const parent = document.getElementById('miElemento').parentElement;
```
- **nextSibling**
 Devuelve el siguiente nodo hermano de un elemento (puede ser un nodo de texto o comentario).
```js
const next = document.getElementById('miElemento').nextSibling;
```
- **nextElementSibling**
 Devuelve el siguiente nodo hermano de un elemento, pero solo si es un elemento (omitiendo nodos de texto o comentarios).
```js
const next = document.getElementById('miElemento').nextElementSibling;
```
- **previousSibling**
Devuelve el nodo anterior hermano de un elemento.
```js
const prev = document.getElementById('miElemento').previousSibling;
```
- **previousElementSibling**
Devuelve el nodo anterior hermano de un elemento, pero solo si es un elemento (omitiendo nodos de texto o comentarios).
```js
const prev = document.getElementById('miElemento').previousElementSibling;
```
- **matches()**
Verifica si un elemento coincide con un selector CSS. Es útil para comprobaciones dentro de un bucle o para condicionar el comportamiento en función de si un elemento cumple con ciertos criterios.
```js
const element = document.getElementById('miElemento');
if (element.matches('.miClase')) {
    console.log('El elemento tiene la clase miClase');
}
```
- **closest()**
Encuentra el ancestro más cercano de un elemento que coincida con el selector CSS proporcionado.
```js
const element = document.getElementById('miElemento');
const ancestor = element.closest('.miClase');
```
- **getRootNode()**
 Devuelve el nodo raíz de un elemento, que puede ser el document o el shadowRoot.
```js
const root = document.getElementById('miElemento').getRootNode();
```
## Propiedades de los elementos DOM
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que `className` pero con el atributo id.
- **inner HTML** - Devuelve o permite insertar codigo HTML (INCLUYENDO TAG Y TEXTO)
- **inner Text** - Devuelve o permite insertar texto en un elemento
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - Nos permite optener o setearvalores de un elemento `input`.
 ## Acciones  o eventos con elementos en el DOM (averiguar)

- **setAttribute()**: Establece el valor de un atributo.
- **getAttribute()**: Obtiene el valor de un atributo.
- **removeAttribute()**: Elimina un atributo.
- **classList.add()**: Añade una o más clases a un elemento.
-  **classList.remove()**: Elimina una o más clases.
- **classList.toggle()**: Si la clase existe, la elimina; si no, la añade.
- **classList.contains()**: Verifica si un elemento tiene una clase específica.
1. Eventos Comunes en el DOM
En JavaScript, los eventos son acciones o sucesos que ocurren en el DOM y que puedes "escuchar" para ejecutar funciones específicas. Los eventos pueden ser generados por el usuario, el sistema o el navegador.

- a. Eventos de Mouse
- **click**: Se dispara cuando un elemento es clicado.
- **dblclick**: Se dispara cuando un elemento es doblemente clicado.
- **mouseover**: Se dispara cuando el puntero del ratón se mueve sobre un elemento.
- **mouseout**: Se dispara cuando el puntero del ratón sale de un elemento.
- **mousemove**: Se dispara cuando el ratón se mueve dentro de un elemento.
- **keydown**: Se dispara cuando una tecla es presionada.
- **keyup**: Se dispara cuando una tecla es liberada.
- **keypress**: Se dispara cuando una tecla es presionada y se encuentra en estado de repetición (no recomendado para nuevos proyectos debido a su obsolescencia).
- **focus**: Se dispara cuando un elemento, como un campo de entrada, recibe el enfoque.
- **blur**: Se dispara cuando un elemento pierde el enfoque.
- **change**: Se dispara cuando un valor de un campo de formulario cambia (como un <input>, <select>, o <textarea>).
- **resize**: Se dispara cuando se cambia el tamaño de la ventana del navegador.
- **scroll**: Se dispara cuando la página o un elemento con barra de desplazamiento es desplazado.
- **load**: Se dispara cuando un recurso, como una imagen o una página, se carga completamente.
- **unload**: Se dispara cuando una página o documento está a punto de descargarse o cerrarse (menos utilizado en la práctica moderna).
- **focusin**: Se dispara cuando un elemento recibe el enfoque (propagación ascendente).
- **focusout**: Se dispara cuando un elemento pierde el enfoque (propagación ascendente).
> [!NOTE]
> tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas- que nos perimite a travez las palbras reservadas darle un estilo o significado al contenido de las etiquetas). la primera tecnilogia fue `xml` despues nace `html` despues la ultima generacion de tecnologias de markado de texto `markdown`