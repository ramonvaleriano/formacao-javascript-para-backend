/**
 * Introdução a Array
 */

let arrayNumeros = new Array();

arrayNumeros = [...[10, 6.5, 8, 7.5]];

console.log(`**********************`);
console.log(`Testando a lista de números: ${arrayNumeros}`);

// Criando função para a somar todos os números.
function somaElementosFor(arrayDados) {
  let soma = 0;
  for (let i = 0; i < arrayDados.length; i++) {
    soma += arrayDados[i];
  }

  return soma;
}

const mediaDeElementos = (arrayDados, soma) => {
  let media = soma / arrayDados.length;

  return media;
};

const somaElementosWhile = (arrayNumeros) => {
  let soma = 0;
  i = 0;
  while (i < arrayNumeros.length) {
    soma += arrayNumeros[i];
    i++;
  }

  return soma;
};

// Testando a média
let soma = somaElementosFor(arrayNumeros);
let media = mediaDeElementos(arrayNumeros, soma);

console.log(`A media dos números: ${arrayNumeros} = ${media}`);

soma = somaElementosWhile(arrayNumeros);
media = mediaDeElementos(arrayNumeros, soma);

console.log(`A media dos números: ${arrayNumeros} = ${media}`);
