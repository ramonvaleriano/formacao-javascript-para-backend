/**
 * Funções: Funções Generalizadas
 */

// Estudando funções de forma generalizada.
function mensage(word) {
  console.log(word);
}

// Vamos exibir textos:
mensage("Hello, word!");
mensage("Ramon Valeriano");

// Uma funçaõ de soma de dois números mockados, sem parâmetros.
function sumTwoNUmbers() {
  const number1 = 10;
  const number2 = 30;
  const result = number1 + number2;

  return result;
}

// Usando as duas funções ao mesmo tempo.
const sumaTwo = sumTwoNUmbers();
mensage(sumaTwo);
