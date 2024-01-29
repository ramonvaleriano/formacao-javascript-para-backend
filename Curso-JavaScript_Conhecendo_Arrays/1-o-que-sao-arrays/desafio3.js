/**
 * O que são arrays.
 * Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push().
 * Imprima no console os itens presentes no array para verificar se os números foram adicionados.
 * Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual.
 * Imprima no console o array atualizado para verificar a mudança.
 */

// Criando função para essa questão.
function adicionandoTresElementos(
  arrayDados,
  numero1 = false,
  numero2 = false,
  numero3 = false
) {
  if (numero1 && numero2 && numero3) {
    let validador = false;
    if (Array.isArray(arrayDados)) {
      if (numero1) {
        arrayDados.push(numero1);
        validador = arrayDados.includes(numero1);
        validador
          ? console.log(`Elemento ${numero1} adicionado.`)
          : console.log(`Falha ao adicionar o elemento ${numero1}`);
      }
      if (numero2) {
        arrayDados.push(numero2);
        validador = arrayDados.includes(numero2);
        validador
          ? console.log(`Elemento ${numero2} adicionado.`)
          : console.log(`Falha ao adicionar o elemento ${numero2}`);
      }
      if (numero3) {
        arrayDados.push(numero3);
        validador = arrayDados.includes(numero3);
        validador
          ? console.log(`Elemento ${numero3} adicionado.`)
          : console.log(`Falha ao adicionar o elemento ${numero3}`);
      }
    }
  }
}

function mensagem(mensagemEntrada, dados = false) {
  if (mensagemEntrada && dados) {
    console.log(`${mensagemEntrada} ${dados}`);
  }
  if (mensagemEntrada && !dados) {
    console.log(`${mensagemEntrada}`);
  }
}

const subistituindoPeloDobro = (arrayDados) => {
  if (Array.isArray(arrayDados)) {
    const elementoDobrado = Math.pow(arrayDados[0], 2);
    arrayDados[0] = elementoDobrado;
  }
};

// Testando os dados.
const meuArray = new Array();
adicionandoTresElementos(meuArray, 11, 30, 23);
mensagem("Array Criado:", meuArray);
subistituindoPeloDobro(meuArray);
mensagem("Array Atualizado:", meuArray);
