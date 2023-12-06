/**
 * Funções: Funções com Parâmetros
 */

// Funções com entradas de parâmetros.

function sumTwoNUmbers(number1, number2){
    const result = number1 + number2;
    return result;
}

// Função para mensagem.

function mensage(mensage1, mensage2){
    const mensageResutl = `${mensage1}${mensage2}`
    return mensageResutl;
}

// Usando as funções.
let number1 = 10;
let number2 = 20;

let sumNumber = sumTwoNUmbers(number1, number2);
let mensageResult = mensage(`A soma dos dois número ${number1} e ${number2}: `, sumNumber);
console.log(mensageResult);

number1 = 50;

sumNumber = sumTwoNUmbers(number1, number2);
mensageResult = mensage(`A soma dos dois número ${number1} e ${number2}: `, sumNumber);
console.log(mensageResult);