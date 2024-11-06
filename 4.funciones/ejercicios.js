//haciendo uso de los prototipos de tipo closoure
//ejercicio numero 1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario.
// Prototipo de la función que va a pedir el nombre y la edad
// function pedirDatos() {
//     let nombre = '';
//     let edad = 0;
//     function ingresarDatos() {
//         nombre = prompt('ingresa tu nombre');
//         edad = parseInt(prompt('cunatos años tienes'));
//         if (edad > 18) {
//             alert(`Bienvenido, ${nombre}`);
//         } else {
//             alert('Lo siento, debes ser mayor de 18 años para continuar.');
//         }
//     }
//     return ingresarDatos;
// }
// let obtenerDatos = pedirDatos();
// obtenerDatos();

//ejercicio 2
//haciendo uso de los prototipos de tipo closoure
//crear un programa que pida registara el nombre del producto el usuario podra luego eliminar el produxto o actualizasr el nombre del producto.
//observacion al realizar la actuacion podre ver el valor anterior como el valor nuevo

// Función constructora para el Producto
// Definimos la clase Producto
// Función para crear un producto
// Función constructora para el Producto
// Función constructora para el Producto
// Función constructora para el Producto
function Producto() {
    this.nombre = '';  // Inicializamos el nombre vacío

    // Método para registrar el nombre del producto
    this.registrarProducto = function() {
        this.nombre = prompt("Ingresa el nombre del producto:");
        if (this.nombre) {
            alert(`Producto registrado: ${this.nombre}`);
        } else {
            alert("No se registró ningún producto.");
        }
    };

    // Método para actualizar el nombre del producto
    this.actualizarProducto = function() {
        if (this.nombre) {
            const nuevoNombre = prompt(`Nombre actual: ${this.nombre}\nIngresa el nuevo nombre del producto:`);
            if (nuevoNombre && nuevoNombre.trim() !== '') {
                this.nombre = nuevoNombre;
                alert(`Producto actualizado a: ${this.nombre}`);
            } else {
                alert("El nombre no puede estar vacío.");
            }
        } else {
            alert("No hay un producto registrado para actualizar.");
        }
    };

    // Método para eliminar el producto
    this.eliminarProducto = function() {
        if (this.nombre) {
            alert(`Producto "${this.nombre}" eliminado.`);
            this.nombre = '';  // Eliminar el producto
        } else {
            alert("No hay un producto registrado para eliminar.");
        }
    };

    // Método para mostrar el menú y ejecutar las acciones
    this.mostrarMenu = function() {
        let opcion;
        do {
            // Mostrar el menú con las opciones disponibles
            opcion = prompt(`
            Producto registrado: ${this.nombre ? this.nombre : 'No registrado'}
            ¿Qué quieres hacer?
            1. Actualizar producto
            2. Eliminar producto
            3. Salir
            Elige una opción (1, 2 o 3):`);

            // Realizar la acción según la opción seleccionada
            if (opcion === '1') {
                this.actualizarProducto();
            } else if (opcion === '2') {
                this.eliminarProducto();
            } else if (opcion === '3') {
                alert("Saliendo...");
            } else {
                alert("Opción no válida. Intenta de nuevo.");
            }
        } while (opcion !== '3' && this.nombre); // Continuar hasta que elija "Salir" o el producto sea eliminado
    };
}

// Crear una instancia del Producto
const miProducto = new Producto();

// Registrar el producto
miProducto.registrarProducto();

// Mostrar el menú para elegir actualizar, eliminar o salir
miProducto.mostrarMenu();
