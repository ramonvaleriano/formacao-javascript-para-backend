/**
 * O que são arrays.
 * Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push().
 * Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
 */

// Criando função para essa questão.
function adicionandoTresElementos(
  arrayDados,
  numero1 = false,
  numero2 = false,
  numero3 = false
) {
  if (numero1 && numero2 && numero3) {
    arrayDados.push(numero1, numero2, numero3);
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

// Testando os dados.
const meuArray = new Array();
adicionandoTresElementos(meuArray, 11, 30, 23);
mensagem("Array Criado:", meuArray);
