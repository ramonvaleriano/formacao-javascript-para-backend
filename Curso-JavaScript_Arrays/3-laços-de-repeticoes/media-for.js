/**
 * Laços de repetições
 * Média com For.
 */

// Dados para se trabalhar.

const notas = [10, 6.5, 8, 7.5];

// Função para Caluclas a médias das notas do aluno.

const mediaDoAluno = (notas) => {
  let somaNotas = 0;
  if (!notas) return null;
  for (let nota = 0; nota < notas.length; nota++) {
    somaNotas += notas[nota];
  }
  let media = somaNotas / notas.length;
  return media;
};

// Testando os Dados.
let media = mediaDoAluno(notas);
console.log(media);
