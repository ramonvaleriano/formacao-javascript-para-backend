/**
 * Laços de Repetições.
 * 3 - Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
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

function somaDeTodosOsNumeros(arrayDados) {
  // Função para exibir cada elemento.
  if (validadeDoArray(arrayDados)) {
    const somaDosNumeros = arrayDados.reduce((soma, valor) => {
      soma += valor;
      return soma;
    }, 0);
    console.log(`A soma total dos dados: ${somaDosNumeros}`);
    return somaDosNumeros;
  }

  console.log("Não é possível fazer o uso dos dados.");
  return null;
}

// Resolvendo a questão.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const soma = somaDeTodosOsNumeros(numeros);
