/**
 * Erros
 */

import funcoes from "../funcoes/funcoes.js";
const { funcaoPorFuncaoError, exibirMensagem } = funcoes;

// Função para forçar error.
function funcaoParaGerarError() {
  throw new Error("Novo error gerado.");
}

const divisaoDeDoisNumeros = (numer1, numero2) => {
    let result = numer1 / numero2
    return result
}

// Usando a função que gera error.
funcaoPorFuncaoError(funcaoParaGerarError);
exibirMensagem(funcaoPorFuncaoError(divisaoDeDoisNumeros(4, 2)))
exibirMensagem(funcaoPorFuncaoError(divisaoDeDoisNumeros(4, 0)))
exibirMensagem(funcaoPorFuncaoError(divisaoDeDoisNumeros(0, 0)))
exibirMensagem(funcaoPorFuncaoError(divisaoDeDoisNumeros('a', 2)))

