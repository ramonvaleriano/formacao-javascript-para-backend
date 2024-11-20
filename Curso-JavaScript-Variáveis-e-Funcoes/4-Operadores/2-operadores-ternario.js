/**
 * Operadores Ternários
 */

import funcoes from "../funcoes/funcoes.js";
const { validadorFalse, exibirMensagem } = funcoes;

// Função para validar maior idade
function deMaiorOuNao(idade, idadeBase) {
  let validaIdade = validadorFalse(idade);

  let validaIdadeBase = validadorFalse(idadeBase);
  let mensagem = null;

  if (!validaIdade || idade <= 0) {
    throw new Error("Idade invalida!");
  }
  else if (!validaIdadeBase || idadeBase <= 0) {
    throw new Error("Idade base invalida!");
  }
  else if (validaIdade && validaIdadeBase) {
    mensagem =
      idade > idadeBase
        ? `${idade} é maior que ${idadeBase}; Maior de idade.`
        : `${idade} é menor que ${idadeBase}; Menor de idade.`;
  }

  return mensagem;
}

// Validadando dados.
exibirMensagem(deMaiorOuNao(27, 18));
exibirMensagem(deMaiorOuNao(16, 18));


