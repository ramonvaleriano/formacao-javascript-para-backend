/*
    Mais sobre arrays
*/

// Indice dos arrays.

let arr = [1, 3, 6, 8, 2];
let nomes = ["Milla", "Ramon", "Valeriano"];
let bool = [true, false];
let mistura = [89, "Milla", true];

let indice = 1;
console.log("Validando estrutura de indice de arrays");

console.log(`O indice usado para cada array: ${indice}`);
console.log(arr[indice]);
console.log(nomes[indice]);
console.log(bool[indice]);
console.log(mistura[indice]);

// Testando mais sobre o caso de arrays.
indice = 0;

console.log(`O indice usado para cada array: ${indice}`);
console.log(arr[indice]);
console.log(nomes[indice]);
console.log(bool[indice]);
console.log(mistura[indice]);

// Ultimo dado de um array.

indice = bool.length - 1;
console.log(`O indice usado para cada array: ${indice}`);
console.log(bool[indice]);
