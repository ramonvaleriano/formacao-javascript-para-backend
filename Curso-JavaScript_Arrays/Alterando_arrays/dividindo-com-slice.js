// Dividindo dados de um array usando o slice.

const alunosTotal = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

primeiraTurma = alunosTotal.slice(0, alunosTotal.length / 2)
segundaTurma = alunosTotal.slice(alunosTotal.length / 2)

console.log(`A turma toda tem ${alunosTotal.length}`)
console.log(`Turma: ${alunosTotal}`)

console.log(`Primeira Turma: ${primeiraTurma}`)
console.log(`Tem ${primeiraTurma.length} alunos.`)

console.log(`Segunda Turme: ${segundaTurma}`)
console.log(`Tem ${segundaTurma.length} alunos`)