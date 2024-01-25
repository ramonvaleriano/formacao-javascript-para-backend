/**
 * Avançando em Arrays
 * Usando Set para eliminar números repetidos.
 */

// Dados necessários para se trabalhar.
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Trbalhando com set.

let nomesOriginais = new Set(nomes)
nomesOriginais = Array.from(nomesOriginais)

const meuSet = new Set(nomes)
const nomesAtualizados = [...meuSet]

console.log(nomes)
console.log(nomesOriginais)
console.log(nomesAtualizados)