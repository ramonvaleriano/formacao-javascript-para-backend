/**
 * Funções: Funções base
 */

// Estudando a base das funções.

function exibirMensagemSemParametro() {
  console.log("Explicando o que há função!");
}

const exibirFuncaoArrow = (mensagem) => {
  console.log(mensagem);
};

const somaDoisNumeros = (numero1, numero2) => {
  const result = numero1 + numero2;
  return result;
};

// Testando as funções.

exibirMensagemSemParametro();

exibirFuncaoArrow("Mensagem de estudo da função.");

exibirFuncaoArrow('Somando dois números');

exibirFuncaoArrow(somaDoisNumeros(2, 3))
