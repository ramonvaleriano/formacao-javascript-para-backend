/*
    Propriedades do array.
*/

// Estudando a forma de acesso as propriedades dos arrays.
console.log("Estudando as propriedades dos arrays e como ter acesso a elas.");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let quantity = numeros.length;
console.log(quantity);
quantity = numeros["length"];
console.log(quantity);

let indice = 3;
console.log(numeros[indice]);
