/*Introdução a arrays*/

// Dados das notas
const notas = [10, 3, 5, 10, 21, 53];

// Calculando soma por função comum.
function mediaSomaComum(listaNotas) {
  let somaNotas = 0;
  for (i = 0; i < listaNotas.length; i++) {
    somaNotas += listaNotas[i];
  }

  let media = somaNotas / listaNotas.length;

  return media;
}

const mediasNotas1 = mediaSomaComum(notas)
console.log(mediasNotas1)
