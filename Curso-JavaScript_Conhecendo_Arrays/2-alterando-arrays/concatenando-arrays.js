/**
 * Alterando Arrays
 * Concatenando Arrays
 */

// Dados para o uso no programa.
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

// Concatenando Arrays.

const salaUnica = salaJS.concat(salaPython);
const salaUnificada = [...salaJS, ...salaPython];
console.log(salaUnica);
console.log(salaUnificada);
