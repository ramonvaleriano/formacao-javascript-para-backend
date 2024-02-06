/**
 * Laços de Repetição
 * Média com For
 */

// Função para se calcular a média.
function validadeDoArray(arrayDados) {
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    return false;
  }
  return true;
}

function mediaNotasFor(notas) {
  if (validadeDoArray(notas)) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    const media = soma / notas.length;

    return media;
  }
  return null;
}
