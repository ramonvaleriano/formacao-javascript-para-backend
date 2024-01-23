/**
 * O Que São Arrays
 * Introdução.
 */

// Dados para o aprendizado.

const notas = [5, 6, 9, 4.5, 7];

// criando função para percorrer todo oa array.

function somandoArrays(array) {
  let soma = 0;
  if (array) {
    for (let index = 0; index < array.length; index++) {
      soma += array[index];
    }
  }
  return soma;
}

const loggerPadrçao = function (mensagem = null, tipo = null) {
  if (mensagem && tipo) {
    switch (tipo) {
      case "info":
        console.log(`[INFO]: ${mensagem}`);
        return null;
      case "error":
        console.log(`[ERROR]: ${mensagem}`);
        return null;
      case "warning":
        console.log(`[WARNING]: ${mensagem}`);
        return null;
      default:
        console.log(`[INFO]: ${mensagem}`);
        return null;
    }
  }
};

const mediaNotas = (array, somaNotas) => {
  let media = 0;
  let mensagemLogger = loggerPadrçao;
  if (array) {
    const quantidadeElementos = array.length;
    if (somaNotas === 0) {
      mensagemLogger(
        "A soam dos números do aarray não pode ser zero.",
        "error"
      );
    }
    media = somaNotas / quantidadeElementos;
  }

  return media;
};

const addElement = (array, element) => {
    if (array && element){
        array.push(element);
    }
}



// Testando os dados.

const mensagemLogger = loggerPadrçao;
mensagemLogger("Somando todas as notas:", "info");
let somaTodasAsNotas = somandoArrays(notas);
mensagemLogger(`Todas as notas somadas: ${somaTodasAsNotas}`, "infor");
let mediaTodasAsNotas = mediaNotas(notas, somaTodasAsNotas);
mensagemLogger(`A média de todas as notas é: ${mediaTodasAsNotas}`, "info");

// Adicionando elementos unitários.

let newElement = 10;

mensagemLogger(`Adicionando um novo elemento: ${newElement}`, 'info')
addElement(notas, newElement);
mensagemLogger(`Novo elemento adicionado ao array: ${notas}`, 'info')

