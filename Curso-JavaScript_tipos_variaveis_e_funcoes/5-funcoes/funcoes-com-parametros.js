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

function mensageOne(mensage){
    console.log(mensage);
}

function nameAge(name, age){
    const mensage = `Meu nome é ${name} e minha idade é ${age}`;
    return mensage;
}

// Usando as funções.
let number1 = 10;
let number2 = 20;

let sumNumber = sumTwoNUmbers(number1, number2);
let mensageResult = mensage(`A soma dos dois número ${number1} e ${number2}: `, sumNumber);
mensageOne(mensageResult);

number1 = 50;

sumNumber = sumTwoNUmbers(number1, number2);
mensageResult = mensage(`A soma dos dois número ${number1} e ${number2}: `, sumNumber);
mensageOne(mensageResult);

mensageOne(nameAge('Ramon Valeriano', '34'))