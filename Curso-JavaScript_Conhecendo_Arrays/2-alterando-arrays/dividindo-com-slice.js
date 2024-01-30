/**
 * Alterando Arrays
 * Dividindo Arrays com slice
 */

// Dados para o uso.

const listaEstudantes = [
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
  "Camilo",
];

// Criando uma função para dividir a lista em duas partes.
function dividirTurmas(listaDeEstudantes) {
  if (!Array.isArray(listaDeEstudantes) && listaDeEstudantes.length <= 0)
    return [[], []];
  let turma1 = new Array();
  let turma2 = new Array();

  if (listaDeEstudantes.length % 2 === 0) {
    turma1 = listaDeEstudantes.slice(0, listaDeEstudantes.length / 2);
    turma2 = listaDeEstudantes.slice(listaDeEstudantes.length / 2);
  } else {
    const meio = Math.ceil(listaDeEstudantes.length / 2);
    turma1 = listaDeEstudantes.slice(0, meio);
    turma1 = listaDeEstudantes.slice(meio);
  }
  return [turma1, turma2];
}

// Testanoo os dados.
const [turma1, turma2] = dividirTurmas(listaEstudantes);

console.log(listaEstudantes);
console.log(turma1);
console.log(turma2);
