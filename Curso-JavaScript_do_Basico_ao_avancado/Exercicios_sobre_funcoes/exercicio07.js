/*
    Exercício 07:

    Escreba uma função que receba  um número negativo e retorne um número positivo;

    Dica: utilize a função Math.abs.
*/

const reverteNumber = (number) => {return Math.abs(number)}

let numberResult = reverteNumber(-5)

console.log(numberResult)