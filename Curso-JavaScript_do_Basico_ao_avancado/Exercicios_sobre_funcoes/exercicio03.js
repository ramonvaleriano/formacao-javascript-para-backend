/*
    Exercício 03:

    Criar uma função que some dois números e retorne o resultado;

    Imprimir o resultado dessa função.
*/

function somaDoisNumeros(numero1, numero2) {
  return numero1 + numero2;
}

let numero1 = 3;
let numero2 = 4;
let resultado = somaDoisNumeros(numero1, numero2);

console.log(`A soma dos número ${numero1} e ${numero2} é ${resultado}`);
