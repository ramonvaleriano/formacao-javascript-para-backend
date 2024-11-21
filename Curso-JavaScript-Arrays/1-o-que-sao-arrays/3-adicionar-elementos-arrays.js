/**
 * Como adicionar elementos no array
 */

// Declarando array
let arrayDeDados = new Array(7, 9.5, 3.4, 8.8, 1.3);

console.log("****************************************");
console.log(`Array de Dados: ${arrayDeDados}`);

// Como adicionar elementos no final do array.
arrayDeDados.push(9);

console.log(`Array de Dados 9 adicionado no final: ${arrayDeDados}`);

// Como adidiconar no inicio do array
arrayDeDados.unshift(7.34);

console.log(`Array de Dados 9 adicionado no final: ${arrayDeDados}`);

// Adicionar subistiruindo um valor do array.
arrayDeDados.splice(1, 0, 8.1);
console.log(
  `Array de Dados 8 na posição 1, sem repetir, sem substiruir número: ${arrayDeDados}`
);
