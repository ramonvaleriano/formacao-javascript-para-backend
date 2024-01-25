/**
 * Avançando em Arrays
 * Clonando com Spread Operator
 */

// Dados para serem usados.
const notas = [7, 7, 8, 9];

// Clonando da forma que eu eu acho que é.
console.log(`O arrays Atual: ${notas}`)

const notasClonadas = [...notas, 10]

console.log(`Array Clonado: ${notasClonadas}`)