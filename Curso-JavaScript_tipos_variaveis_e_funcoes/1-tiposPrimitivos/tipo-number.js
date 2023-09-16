/*
    Tipos Primitivos

    Tipo Number.
*/

// Testadno variáveis númericas.
const meuNumero = 14;
const fraseString = "O valor desejado: ";

console.log(fraseString);
console.log(meuNumero);

console.log(`${fraseString}${meuNumero}`);

// Validando variáveis númericas.
const primeiroNumero = 1;
const segundoNumero = 2;

// Soma de dois números.
const somaNumeros = primeiroNumero + segundoNumero;

console.log("Validando soma: ");
console.log(somaNumeros);

// Multiplicação de dois números.
const multiplicacaoDoisNumeros = primeiroNumero * segundoNumero;

console.log(`A multiplicação de dois Números ${multiplicacaoDoisNumeros}`);

// Subtração de dois Números.
const subtracaoDoisNumeros = primeiroNumero - segundoNumero;

console.log(`A subtração de dois números: ${subtracaoDoisNumeros}`);

// Divisão de dois números.
const divisaoDoisNumeros = primeiroNumero / segundoNumero;

console.log(`A divisão dos dois números: ${divisaoDoisNumeros}`);

// Resto de dois números.
const restoDoisNumeros = primeiroNumero % segundoNumero;

console.log(`Resto de dois números: ${restoDoisNumeros}`);

// Números de Pontos Flutuantes.

const numeroPontoFlutuante = 3.14;
const pontoFlutuanteSemOZero = 0.5;

console.log(`Número ponto Flutuante: ${numeroPontoFlutuante}`);
console.log(`Número sem o zero antes: ${pontoFlutuanteSemOZero}`);

// NaN -> Not A Number (Não é um número).
const nanNumber = "Palavra" * segundoNumero;

console.log(`NaN: ${nanNumber}`);
