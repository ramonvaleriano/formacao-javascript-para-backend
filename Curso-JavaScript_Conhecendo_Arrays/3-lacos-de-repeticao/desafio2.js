/**
 * Laços de Repetições.
 * 2 - Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
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

function exibindoCadaElemento(arrayDados) {
  // Função para exibir cada elemento.
  if (validadeDoArray(arrayDados)) {
    let soma = 0;
    for (let i = 0; i < arrayDados.length; i++) {
      console.log(`${i} -> ${arrayDados[i]}`);
      soma += arrayDados[i];
    }
    console.log(`A soma total dos dados: ${soma}`);
    return soma;
  }
  console.log("Não é possível fazer o uso dos dados.");
  return null;
}

// Resolvendo a questão.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const soma = exibindoCadaElemento(numeros);
