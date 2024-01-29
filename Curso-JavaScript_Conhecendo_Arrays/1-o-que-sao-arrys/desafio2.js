/**
 * O que são arrays.
 * Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array.
 * Em seguida, exiba o array antes e depois da alteração.
 */

// Criando array esparso.
const novoArray = new Array();
novoArray.push(1, 2, 3, 7, 2, 8, 4);
console.log(`Araay atual: ${novoArray}`);
let novoPrimeiroElemento = 0;
novoArray.unshift(novoPrimeiroElemento);
console.log(`Elemento para ser adicionado: ${novoPrimeiroElemento}`);
console.log(`Array atualizado: ${novoArray}`);
novoPrimeiroElemento = -3;
novoArray.unshift(novoPrimeiroElemento);
console.log(`Elemento para ser adicionado: ${novoPrimeiroElemento}`);
console.log(`Array atualizado: ${novoArray}`);
