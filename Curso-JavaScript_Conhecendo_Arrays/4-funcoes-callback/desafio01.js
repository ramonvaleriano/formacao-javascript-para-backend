/**
 * Funções Callbacks
 * Desafio 01
 * 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
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

function mostrandoElementos(arrayDados) {
  if (!validaArray(arrayDados)) {
    console.log("ERROR - Não foi possível acessar os dados.");
  }
  arrayDados.forEach((valor, indice) => {
    console.log(`Posição ${indice} - Dado: ${valor}`);
  });
}

// Dados para test.
const numeros = [6, 9, 12, 15, 18, 21];

// Testando dados.
mostrandoElementos(numeros);
