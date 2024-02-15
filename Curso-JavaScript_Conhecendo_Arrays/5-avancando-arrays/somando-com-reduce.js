/**
 * Avançando Arrays
 * Somando com Reduce
 */

// Criando funções para a questão.
function validaArray(arrayDados){
    if (!Array.isArray(arrayDados) || arrayDados.length < 0){
        return false
    }
    return true
}


function calculoDaMedia(arrayDados) {
  // Função para se calcular a média.
  if(!validaArray(arrayDados)){
    console.log('Não foi possivel validar o array desejado.')
    return null
  }

  const somaNotas = arrayDados.reduce((valor, acumulador) => {
    acumulador += valor;
    return acumulador;
  }, 0);

  if (somaNotas === 0) {
    return null;
  }

  const media = somaNotas / arrayDados.length;

  return media;
}

// dados para uso.
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

console.log(calculoDaMedia(salaJS));
console.log(calculoDaMedia(salaJava));
console.log(calculoDaMedia(salaPython));
