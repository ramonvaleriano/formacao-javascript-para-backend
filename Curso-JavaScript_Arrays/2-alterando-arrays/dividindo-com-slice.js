/**
 * Aleterando arrays.
 * Dividindo com slices.
 */

// Dados que serão usados.

const nomeAlunos = [
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

// Criando uma função para fazer essa função de forma mais inteligente.
function divisaoDeTurmas(listTurma) {
  let quantidadeAlunos = new Array();
  let turma1 = new Array();
  let turma2 = new Array();

  if (listTurma) {
    quantidadeAlunos = listTurma.length;
    if (quantidadeAlunos === 0) {
      return turma1, turma2;
    } else if (quantidadeAlunos === 1) {
      turma1 = [...listTurma];
    } else if (quantidadeAlunos % 2 == 0) {
      turma1 = listTurma.slice(0, quantidadeAlunos / 2);
      turma2 = listTurma.slice(quantidadeAlunos / 2, quantidadeAlunos);
    } else if (quantidadeAlunos % 2 != 0) {
      const meio = quantidadeAlunos / 2;
      const divisor = Math.ceil(meio);
      turma1 = listTurma.slice(0, divisor);
      turma2 = listTurma.slice(divisor, quantidadeAlunos);
    }
  }
  return [turma1, turma2];
}

// Usando as função slice para dicivdir as turmas.

const turma1 = nomeAlunos.slice(0, 10);
const turma2 = nomeAlunos.slice(10, 20);

console.log(`A turma completa é: ${nomeAlunos}`);
console.log(`A turma 1 é: ${turma1}, com ${turma1.length} Alunos`);
console.log(`A turma 2 é: ${turma2}, com ${turma2.length} Alunos`);

// Usando a função criada.
const [novaTurma1, novaTurma2] = divisaoDeTurmas(nomeAlunos);

console.log("\n\n");
console.log(`A turma completa é: ${nomeAlunos}`);
console.log(`A turma 1 é: ${novaTurma1}, com ${novaTurma1.length} Alunos`);
console.log(`A turma 2 é: ${novaTurma2}, com ${novaTurma2.length} Alunos`);

