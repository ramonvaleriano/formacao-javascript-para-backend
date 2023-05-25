/*Estudando um pouco mais de for e seu CallBacks*/

const lista = [1, 2, 3, 4, 5];

// Usando for de forma convencional.
console.log("Usando for convencional.");
for (let indice = 0; indice < lista.length; indice++) {
  console.log(lista[indice]);
}

// Usando for com dois indices.
console.log("\nUsando for com dois indices.");
for (let i = 0, j = 0; i < lista.length; i++, j++) {
  console.log(lista[i] + j);
}

// Usando for of.
console.log("\nUsando for of");
for (elemento of lista) {
  console.log(elemento);
}

// Usando for of para criar uma somatória de todos os elementos.
console.log("\nUsando for of para a somatória de todos os elementos.");
let soma = 0;
for (elemento of lista) {
  soma += elemento;
}
console.log(`A soma: ${soma}`);

// Usando forEache com um arrow_function.
console.log("\nUsando forEach com uma arrow function.");
let somatoria = 0;
lista.forEach((numero) => (somatoria += numero));
console.log(`A somatória: ${somatoria}`);
