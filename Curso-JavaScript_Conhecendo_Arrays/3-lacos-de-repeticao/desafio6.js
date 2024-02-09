/**
 * Laços de Repetições.
 * 6 - Crie um programa que calcule a média dos números presentes em um array utilizando um loop for
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

function mediaDosNumeros(arrayDados) {
  if (!validadeDoArray(arrayDados)) return null;

  let media = 0;
  const soma = arrayDados.reduce((valor, somador) => {
    let result = (somador += valor);
    return result;
  }, 0);

  if (soma > 0) {
    media = soma / arrayDados.length;
  }

  return media;
}

// Resolvendo a questão.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// Testando a função.
const somaNumeros = mediaDosNumeros(numeros);
console.log(`A media dos números: ${somaNumeros}`);
