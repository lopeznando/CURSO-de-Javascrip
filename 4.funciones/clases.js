//diseñar una clase para mi entidad celular.
//tendra como atributo numero, marca, modelo, capacidad de bateria.
//tendra como metodos encender, apagar, llamar, colgar, enviar mensaje
class Celular {
    // Constructor que define los atributos del celular
    constructor(numero, marca, modelo, capacidadBateria) {
      this.numero = numero;
      this.marca = marca;
      this.modelo = modelo;
      this.capacidadBateria = capacidadBateria;
      this.encendido = false;  // Indica si el celular está encendido o apagado
      this.llamando = false;   // Indica si está en una llamada
    }
  
    // Método para encender el celular
    encender() {
      if (this.capacidadBateria === 0) {
        console.log("No puedes encender el celular. La batería está vacía.");
        return;
      }
      this.encendido = true;
      console.log(`${this.marca} ${this.modelo} encendido.`);
    }
  
    // Método para apagar el celular
    apagar() {
      if (!this.encendido) {
        console.log("El celular ya está apagado.");
        return;
      }
      this.encendido = false;
      console.log(`${this.marca} ${this.modelo} apagado.`);
    }
  
    // Método para realizar una llamada
    llamar(numeroDestino) {
      if (!this.encendido) {
        console.log("El celular está apagado. No puedes realizar la llamada.");
        return;
      }
      if (this.llamando) {
        console.log("Ya estás en una llamada.");
        return;
      }
      this.llamando = true;
      console.log(`Llamando a ${numeroDestino}...`);
    }
  
    // Método para colgar la llamada
    colgar() {
      if (!this.encendido) {
        console.log("El celular está apagado. No puedes colgar la llamada.");
        return;
      }
      if (!this.llamando) {
        console.log("No hay ninguna llamada activa.");
        return;
      }
      this.llamando = false;
      console.log("Llamada terminada.");
    }
  
    // Método para enviar un mensaje
    enviarMensaje(numeroDestino, mensaje) {
      if (!this.encendido) {
        console.log("El celular está apagado. No puedes enviar el mensaje.");
        return;
      }
      console.log(`Enviando mensaje a ${numeroDestino}: "${mensaje}"`);
    }
  }
  
  // Ejemplo de uso:
  const miCelular = new Celular('123-456-7890', 'Samsung', 'Galaxy S72', 80);
  
  miCelular.encender();  // Enciende el celular
  miCelular.llamar('987-654-3210');  // Realiza una llamada
  miCelular.colgar();  // Cuelga la llamada
  miCelular.enviarMensaje('987-654-3210', 'Hola, ¿cómo estás?');  // Envía un mensaje
  miCelular.apagar();  // Apaga el celular
  