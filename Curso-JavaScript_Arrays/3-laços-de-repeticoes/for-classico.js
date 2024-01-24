/**
 * Laços de Repetições
 * For Clássico.
 */

// Dados para se trabalhar.

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// Criando função para rodar um for internamento.

function exibirNumerosFor(numeros) {
  for (let n = 0; n < numeros.length; n++) {
    console.log(numeros[n]);
  }
}

function exibirNumerosWhile(numeros) {
  let n = 0;
  while (n < numeros.length) {
    console.log(numeros[n]);
    n += 1;
  }
}

// Testando dados.
exibirNumerosFor(numeros);
exibirNumerosWhile(numeros);
