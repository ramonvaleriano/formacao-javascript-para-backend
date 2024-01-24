/**
 * Laços de repetições
 * Média com ForEach
 */

// Dados para se trabalhar.
const notas = [10, 6.5, 8, 7.5];

// Função para se Calcular a média com ForEach.

const mediaDoAluno = (notas) => {
  let somaNotas = 0;
  let media = 0;
  notas.forEach((nota) => {
    somaNotas += nota;
  });
  media = somaNotas / notas.length;

  return media;
};

// Testando os Dados.
const media = mediaDoAluno(notas);
console.log(media)