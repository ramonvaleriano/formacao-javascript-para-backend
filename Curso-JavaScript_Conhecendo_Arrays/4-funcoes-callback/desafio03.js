/**
 * Funções Callbacks
 * Desafio 03
 * 3 - Você recebeu um array numeros contendo valores numéricos.
 * Crie um programa que verifique se um número específico está presente nesse array.
 * Se estiver, o programa deve retornar a posição (índice) desse número.
 * Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
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

function validaElemento(arrayDados, numero) {
  let objetoResponse = { indice: null, numero: null };

  if (!validaArray(arrayDados)) {
    console.log("Não foi possivel usar o Array.");
    return objetoResponse;
  }

  const encontrado = arrayDados.indexOf(numero);

  if (encontrado === -1) {
    objetoResponse["indice"] = encontrado;
  }

  objetoResponse = { indice: encontrado, numero: numero };

  return objetoResponse;
}

// Dados para test.
const numeros = [6, 9, 12, 15, 18, 21];
console.log(numeros);
// Testando dados.
const novosNumeros = executaOperacaoEmArray(numeros, operacaoDeSomaMaisDois);
console.log(novosNumeros);
