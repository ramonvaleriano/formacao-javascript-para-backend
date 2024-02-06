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

function mediaNotasForOf(notas) {
  if (validadeDoArray(notas)) {
    let soma = 0;
    for (let valor of notas) {
      soma += valor;
    }
    let media = soma / notas.length;
    return media;
  }
  return null;
}

function mediaForEach(notas) {
  if (validadeDoArray(notas)) {
    let soma = 0;
    notas.forEach((element) => {
      soma += element;
    });
    let media = soma / notas.length;
    return media;
  }
  return null;
}

function mediaComReduce(notas) {
  if (validadeDoArray(notas)) {
    const somaNumeros = notas.reduce((soma, valor) => {
      return (soma += valor);
    }, 0);
    let media = somaNumeros / notas.length;
    return media;
  }
  return null;
}

// Dados para testes.
const notas = [10, 6.5, 8, 7.5];

// Testando as médias
let media = mediaComReduce(notas);
console.log(media);
media = mediaForEach(notas);
console.log(media);
media = mediaNotasForOf(notas);
console.log(media);
media = mediaNotasFor(notas);
console.log(media);
