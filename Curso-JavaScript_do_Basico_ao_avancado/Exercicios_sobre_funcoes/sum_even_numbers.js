/*
    Soma de Números Pares
    Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.

    A função deve calcular e retornar a soma de todos os números pares presentes no array.

    Utilize o operador de módulo (%) para determinar se um número é par.

    Considere que o array pode conter tanto números inteiros positivos quanto negativos.

    Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo que retorna o resto da divisão.
*/

function sumEvenNumbers(listNumbers) {
  let sumEven = 0;
  listNumbers.map((item) => {
    if (item % 2 == 0) {
      sumEven += item;
    }
  });
  return sumEven;
}

listNumbers = [3, 2, 87, 32, 53, 67, 38];
const result = sumEvenNumbers(listNumbers);

console.log(result);
