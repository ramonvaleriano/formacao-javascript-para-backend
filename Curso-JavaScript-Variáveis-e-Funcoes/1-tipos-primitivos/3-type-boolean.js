import funcoes from "../funcoes/funcoes.js"; // Importação padrão
const { exibirMensagem } = funcoes;

// Funções
function comparativaEntreDoisvalores(variavel1, variavel2) {
  let variavelResult = variavel1 == variavel2;

  return variavelResult;
}

// Testando Condições
exibirMensagem(comparativaEntreDoisvalores(1, 1));
