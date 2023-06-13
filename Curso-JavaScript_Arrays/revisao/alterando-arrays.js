/*Revisando as alterações dos arrays.*/
const alunos = [
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

// Dividindo a sala em duas com slice.
let tumar1 = [];
let tumar2 = [];

function divisorDeTurmas(alunosNaTurma) {
  tumar1 = alunos.slice(0, alunosNaTurma.length / 2);
  tumar2 = alunos.slice(alunosNaTurma.length / 2);
}

console.log(`Turma completa: ${alunos}`);
console.log("Dividindo a turma com slice:");

divisorDeTurmas(alunos);

console.log(tumar1);
console.log(tumar2);

/*Alterando lista com slice.*/

// Função para deletar um elemento baseado no indice.
function removedorDeElemento(lista, index, vezes, nome = null) {
  if (nome == null) {
    lista.splice(index, vezes);
  } else {
    lista.splice(index, vezes, nome);
  }
}

// Deletando um dadopelo indice.
console.log("\nDeletando um dados, com indice 1, retirando 1 vez: ");
console.log(`Lista original: ${alunos}`);

removedorDeElemento(alunos, 1, 1);

console.log(`Lista alterada: ${alunos}`);

// Deletando o elemento de indice 2 e trocando pelo nome Ramon.
console.log('\nSubistituindo o elemento de indice 2 pelo nome "Ramon"');
console.log(`Lista original: ${alunos}`);

removedorDeElemento(alunos, 2, 1, "Ramon");

console.log(`Lista alterada: ${alunos}`);

/*Concatenando duas lista em uma apenas.*/
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

// Jutando duas lista em uma usando concact.
const listaCompletaALunos = salaPython.concat(salaJS);
console.log("\nConcatenando duas listas: ");
console.log(`Sala de Python: ${salaPython}`);
console.log(`Sala de JavaScript: ${salaJS}`);
console.log(`Sala Unificada: ${listaCompletaALunos}`);

// Justando duas lista em uma usando ... .
const alunosDuasSalas = [...salaPython, ...salaJS];
console.log("\nConcatenando duas listas: ");
console.log(`Sala de Python: ${salaPython}`);
console.log(`Sala de JavaScript: ${salaJS}`);
console.log(`Sala Unificada: ${alunosDuasSalas}`);

/*Arrays com duas dimensões*/
const alunosLista = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunosLista, medias];

function exibirAlunoMedia(listaAlunosMedias){
    for(let i = 0, j = 0 ; i < listaAlunosMedias[0].length; i++, j++){
        console.log(`O aluno: ${listaAlunosMedias[0][i]}, tem a média: ${listaAlunosMedias[1][j]}`)
    }
}

console.log('\nPassando a média de todos os alunos: ')

exibirAlunoMedia(listaDeAlunosEMedias)