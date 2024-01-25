/**
 * O que são Arrays
 * Introdução a Arrays
 */

// Lidando com Arrays.

const notas = [10, 6.5, 8, 7.5];

// Criando função que eu possa fazer o calculo das medias.

function mediaReduce(notas) {
  const somaDasNotas = notas.reduce((acumulador, indice) => {
    const soma = acumulador + indice;
    return soma;
  }, 0);

  if (!somaDasNotas) {
    return 0;
  }

  const media = somaDasNotas / notas.length;

  return media;
}

const mediaForEach = (notas) => {
  let somaDasNotas = 0;
  notas.forEach((nota) => {
    somaDasNotas += nota;
  });

  if (!somaDasNotas) {
    return 0;
  }

  const media = somaDasNotas / notas.length;

  return media;
};

const mediaForOf = function (notas) {
  let somaDasNotas = 0;
  for (let nota of notas) {
    somaDasNotas += nota;
  }
  if (!somaDasNotas) {
    return 0;
  }
  const media = somaDasNotas / notas.length;

  return media;
};

const mediaForIn = (notas) => {
  let somaDasNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  if (!somaDasNotas) {
    return 0;
  }

  const media = somaDasNotas / notas.length;

  return media;
};
// Função para exibição de mensagem.
const exibirMensagem = (mensagem) => {
  console.log(mensagem);
};

// Testando os casos.
exibirMensagem(`Vamos fazer a média das seguintes notas: ${notas}`);
exibirMensagem(mediaReduce(notas));
exibirMensagem(mediaForEach(notas));
exibirMensagem(mediaForOf(notas));
exibirMensagem(mediaForIn(notas));
