/**
 * Alterando dados com Splice
 */

// Lista de dados para serem estudados, lista de estudantes.
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

console.log(`Lista de alunos: ${arrayDados} -- Há ${arrayDados.length} alunos`)

// Usando método splice para realizar mudanças no código.
// Retirando ana e caio
arrayDados.splice(2, 2)
console.log(`Retirando dois alunos: ${arrayDados} -- Há ${arrayDados.length} alunos`)

// Adicionando um novo aluno, no lugar da renata.
arrayDados.splice(-3, 1, "Ramon")
console.log(`Substituindo um Aluno: ${arrayDados} -- Há ${arrayDados.length} alunos`)
