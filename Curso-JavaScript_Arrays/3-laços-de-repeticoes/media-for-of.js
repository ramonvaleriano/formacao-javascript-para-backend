/***
 * Laços de repetições
 * Média com For Of.
 */

// Dados para se trabalhar.
const notas = [10, 6.5, 8, 7.5];

// Função para se Calcular a média com for of.

const mediaAluno = (notas) => {
  let somaNotas = 0;
  let media = 0;
  for (let nota of notas) {
    somaNotas += nota;
  }
  media = somaNotas / notas.length;
  return media;
};

// Testando os Dados.
let media = mediaAluno(notas);
console.log(media);
