/**
 * Funções: Expressões de funções.
 */

// Contrução de uma expressão de função.

const sumFunction = function(number1, number2){return number1 + number2};

// Funções de mensagens.

const mensagem = function(mensage1, mensage2){
    const mensageResult = `${mensage1}${mensage2}`;
    return mensageResult;
}

const mensageOne = function(mensage){return console.log(mensage)}

// Executando as funções.

let number1 = 10;
let number2 = 30;

let sumNumber = sumFunction(number1, number2);
let mensageResult = mensagem(`A soma dos dois número ${number1} e ${number2}: `, sumNumber);
mensageOne(mensageResult);