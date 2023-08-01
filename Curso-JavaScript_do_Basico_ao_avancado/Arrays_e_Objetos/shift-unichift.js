/*
    Usando o shift e unishift.
*/

// Lista ou Array.
let frutas = ["Maçã", "Uva", "Melão"];
console.log("Como é a lista inicialmente: ");
console.log(frutas);

// Removenvo o primeiro elemento da lista.
let primeiroeElemento = frutas.shift();
console.log("Como ficou a lista: ");
console.log(frutas);
console.log(`Dado que foi removido: ${primeiroeElemento}`);

// Adicionando dado com unishift.
frutas.unshift("Acerola");
console.log("Como ficou a lista: ");
console.log(frutas);
