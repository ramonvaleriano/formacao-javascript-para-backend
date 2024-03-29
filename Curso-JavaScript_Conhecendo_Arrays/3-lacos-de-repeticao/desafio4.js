/**
 * Laços de Repetições.
 * 4 - Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato:
 * 'o menor número é X e o maior número é Y'.
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

function maiorMenorValorDaLista(arrayDados) {
  if (!validadeDoArray(arrayDados)) return null;

  if (arrayDados.length === 1) return [arrayDados[0], arrayDados[0]];

  let menor = arrayDados[0];
  let maior = arrayDados[0];

  for (valor of arrayDados) {
    if (valor > maior) {
      maior = valor;
    } else if (valor < menor) {
      menor = valor;
    }
  }

  return [maior, menor];
}

// Resolvendo a questão.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// Testando a função.
const [maior, menor] = maiorMenorValorDaLista(numeros);

console.log(`Testando o maior número: ${maior}`);
console.log(`Testando o menor número: ${menor}`);
