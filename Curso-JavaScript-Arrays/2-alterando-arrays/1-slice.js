/**
 * Usando função slice
 */

// Array para testes:
let arrayDados = new Array(
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo"
);
console.log(`Dados originais: ${arrayDados}`)

// Usando a função slice, é uma função que copia arrays.
let novoArray = arrayDados.slice() // Cópia todos os dados.
console.log(`Cópia de todos os dados: ${novoArray}`)

// Copia o três primeiros dados.
let tresPrimeiros = arrayDados.slice(0, 3)
console.log(`Os três primeiros dados: ${tresPrimeiros}`)

// Cópia os três últimos.
let tresUltimos = arrayDados.slice(-3)
console.log(`Os três ultimos: ${tresUltimos}`)

metade = Math.floor(arrayDados.length/2)
console.log(`Metade de um número: ${metade}`)

let sala1 = arrayDados.slice(0, metade)
let sala2 = arrayDados.slice(metade)

console.log(`Todos os alunos: ${arrayDados}`)
console.log(`Primeira sala: ${sala1}`)
console.log(`Segunda sala: ${sala2}`)

