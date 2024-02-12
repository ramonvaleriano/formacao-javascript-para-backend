/**
 * Funções Callbacks
 * Desafio 02
 * 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática.
 * Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
 */

// Criando função para resolução da questão.
const validaArray = (arrayDados) => {
  // Função para validar array
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("ERROR - Dado não pode ser usados!");
    return false;
  }

  console.log("Tipo de dado validado.");
  return true;
};

const operacaoDeSomaMaisDois = (arrayDados) => {
  const novoArray = arrayDados.map((dado) => {
    return dado + 2
  })
  return novoArray
}

function executaOperacaoEmArray(arrayDados, operacao) {
  if (!validaArray(arrayDados)) {
    console.log("ERROR - Não foi possível acessar os dados.");
  }

  return operacao(arrayDados)
}

// Dados para test.
const numeros = [6, 9, 12, 15, 18, 21];
console.log(numeros)
// Testando dados.
const novosNumeros = executaOperacaoEmArray(numeros, operacaoDeSomaMaisDois);
console.log(novosNumeros)