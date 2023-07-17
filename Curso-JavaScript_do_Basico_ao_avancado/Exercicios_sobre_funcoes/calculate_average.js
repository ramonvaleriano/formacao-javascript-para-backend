/*
    Cálculo da média
    Escreva uma função chamada calculateAverage que recebe um array de números como argumento.

    A função deve calcular a média dos números no array.

    A média é calculada somando todos os números e dividindo pelo total de números no array.

    A função deve retornar o valor da média calculada.
*/

function calculateAverage(listNumbers) {
  let sum_numbers = 0;
  let result = listNumbers.map((item) => {
    sum_numbers += item;
  });
  let average = sum_numbers / listNumbers.length;

  return average;
}

let listData = [1, 5, 2, 8, 10];

let result = calculateAverage(listData);
console.log(result);
