/**
 * Tipos Númericos
 *
 */

// Funções
function sumTwoNumbers(number1, number2) {
  let sum_numbers = number1 + number2;

  return sum_numbers;
}

multiplyTwoNumbers = (number1, number2) => {
  let multiply = number1 * number2;

  return multiply;
};

// Testando os dados.
mensagemPrincipal = "Trbalhando com JavaScript";

const meuNumero = 14;

let number1 = 5;
let number2 = 3;

let somaTotal = sumTwoNumbers(number1, number2);
let multiplicacaoTotal = multiplyTwoNumbers(number1, number2);

// Passando mensagens a tela.
let mensagemDeSoma = `Somando ${number1} + ${number2} = ${somaTotal}`;
console.log(mensagemDeSoma);

let mensagemDeMultiplicacao = `Multriplicando ${number1} + ${number2} = ${multiplicacaoTotal}`;
console.log(mensagemDeMultiplicacao);
