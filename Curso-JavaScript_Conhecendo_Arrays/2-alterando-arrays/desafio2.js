/**
 * Alterando arrays.
 * 2 - Crie um array chamado numeros contendo números de 1 a 10.
 * Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
 */

// Função para criar uma lista de com 10 valores.
const funcaoListaNumericaDeValores = (quantidade) => {
  if (!quantidade || quantidade <= 0) return new Array();
  const arrayNumerico = new Array();
  for (let valor = 1; valor <= quantidade; valor++) {
    arrayNumerico.push(valor);
  }
  return arrayNumerico;
};

function funcaoNovoArray(arrayCompleto, indiceInicio, indiceFim) {
  const novoArray = arrayCompleto.slice(indiceInicio, indiceFim + 1);
  return novoArray;
}

// Testando os primeiros dados.
const arrayTest = funcaoListaNumericaDeValores(10);
console.log(`Array Completo: ${arrayTest}`);
const arrayCorte = funcaoNovoArray(arrayTest, 3, 7);
console.log(`Array cortado: ${arrayCorte}`);
