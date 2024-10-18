let numero = 8;
let tablero = "";

for (let caracter1 = 0; caracter1 < numero; caracter1++) {
  for (let caracter2 = 0; caracter2 < numero; caracter2++) {
    if ((caracter2 + caracter1) % 2 === 0) {
      tablero += " ";
    } else {
      tablero += "#";
    }
  }
  tablero += "\n";
}

console.log(tablero);