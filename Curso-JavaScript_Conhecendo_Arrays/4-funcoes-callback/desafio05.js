/**
 * Funções Callbacks
 * Desafio 05
 * 5 - Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação.
 * Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.
 */

// Criando função para resolução da questão.
const validaArray = (arrayDados) => {
  // Função para validar array
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("ERROR - Dado não pode ser usados!");
    return false;
  }

  return true;
};

function multiplicarPorElemento(arrayDados, elemento) {
  if (!validaArray(arrayDados)) {
    console.log("Não foi possível usar o array de dados.");
    return null;
  }

  if (!elemento) {
    console.log("Não há dao para se multiplicar");
    return null;
  }

  const arrayTriplo = new Array();

  arrayDados.forEach((element) => {
    let multiplica = element * elemento;
    console.log(`Dados: ${element} * ${elemento} = ${multiplica}`);
    arrayTriplo.push(multiplica);
  });

  return arrayTriplo;
}

const procuraElemento = function (arrayDados, elemento) {
  if (!validaArray(arrayDados)) {
    console.log("Não foi possível usar o array de dados.");
    return null;
  }

  if (!elemento) {
    console.log("Não há dao para se multiplicar");
    return null;
  }

  const indexEncontrado = arrayDados.findIndex((dado) => {
    if (dado == elemento) {
      return dado;
    }
  });

  if (indexEncontrado >= 0) {
    console.log(`Elemento: ${elemento} -- Index: ${indexEncontrado}`);
    return indexEncontrado;
  }

  return null;
};

// Dados para test.
const numeros = [6, 9, 12, 15, 18, 21];

// Testando dados.
console.log(`Números: ${numeros}`);
const dadosMultiplicados = multiplicarPorElemento(numeros, 3);
let indexEncontrado = procuraElemento(numeros, 18);
indexEncontrado = procuraElemento(dadosMultiplicados, 18);
