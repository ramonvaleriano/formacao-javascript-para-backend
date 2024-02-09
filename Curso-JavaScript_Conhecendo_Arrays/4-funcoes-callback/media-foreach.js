/**
 * Funções CallBack
 * Media forEach
 */

// Função para o uso no estudo.
function validaArray(arrayDados) {
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("Essado dado não pode ser validado");
    return false;
  }
  console.log("Dado validade com sucesso");
  return true;
}

const mediaNotas = (arrayDados) => {
  if (!validaArray(arrayDados)) {
    console.log("Não foi possível realizar o calculo da média");
  }
  let somaDasnotas = 0;
  let media = 0;
  arrayDados.forEach((element) => {
    somaDasnotas += element;
  });

  media = somaDasnotas / arrayDados.length;

  return media;
};

//Dados para user no teste.
const notas = [10, 6.5, 8, 7.5];

// Executando teste.
const media = mediaNotas(notas);
console.log(`A média: ${media}`)