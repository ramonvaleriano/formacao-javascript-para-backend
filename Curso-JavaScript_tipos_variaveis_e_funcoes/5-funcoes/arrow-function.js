/**
 * Funções: Arrow Functions
 */

// Função de Flecha ou Arrow Function.

const sumTwoNumber = (number1, number2) => {
    result = number1 + number2;
    return result;
}

// Executando funçẽs.

let number1 = 20;
let number2 = 30;

let sumNumber = sumTwoNumber(number1, number2);
console.log(`A soma dos dois números que ele está somando: ${number1} + ${number2} = ${sumNumber}`)