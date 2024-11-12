//1. crear una funcion que devuelva el numero menor pasado por argumento.
const utilidades = {
    numeroMenor: function(argumento) {
    
        if (argumento.length === 0) {
            return null; 
        }

        let menor = argumento[0];

        for (let i = 1; i < argumento.length; i++) {
            if (argumento[i] < menor) {
                menor = argumento[i];
            }
        }

        return menor;
    }
};

console.log(utilidades.numeroMenor(5, 2, 8, 1, 10));  
console.log(utilidades.numeroMenor(100, 200, 50, 25)); 

//2 Haciendo uso de la recursion crear una funcion que me muestre los primeros 20 numeros 
const contador = {
    mostrarNumeros: function(n = 1) {
        if (n > 20) {
            return;
        }

        console.log(n);

        this.mostrarNumeros(n + 1);
    }
};

contador.mostrarNumeros();
