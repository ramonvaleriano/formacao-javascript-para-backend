import funcoes from "../funcoes/funcoes.js"; // Importação padrão
const { exibirMensagem } = funcoes;

// Funções
function comparativaEntreDoisvalores(variavel1, variavel2) {
  let variavelResult = variavel1 == variavel2;

  return variavelResult;
}

const validacaoTripla = (numero1, numero2) => {
    let result = numero1 === numero2

    return result
}

// Testando Condições
exibirMensagem(comparativaEntreDoisvalores(1, '1'));
exibirMensagem(validacaoTripla(1, '1'))
exibirMensagem(validacaoTripla(1, 1))