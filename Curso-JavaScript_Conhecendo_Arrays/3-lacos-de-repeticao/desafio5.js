/**
 * Laços de Repetições.
 * 5 - Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
 * e exibir no console apenas os números pares contidos nesse array.
 */

// Criando função para resolver o desafio.
function validadeDoArray(arrayDados) {
  // Função para validar se é uma lista e se não é vazia.
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("Não é possível validar esse dados.");
    return false;
  }
  console.log("Esse dado é valido.");
  return true;
}

function exibirNumerosPares(arrayDados) {
  if (!validadeDoArray(arrayDados)) return null;

  arrayDados.forEach((element) => {
    if (element % 2 == 0) {
      console.log(element);
    }
  });
}

// Resolvendo a questão.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// Testando a função.
exibirNumerosPares(numeros);
