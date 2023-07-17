/*
    Escreva uma função chamada countVowels que recebe uma string como argumento.

    A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).

    A função deve retornar o total de vogais encontradas.
*/

const listVowels = ["a", "e", "i", "o", "u"];

function countVowels(stringInput, listVowels) {
  let quantity = 0;

  stringInput.split("").map((item) => {
    let vowelLower = item.toLowerCase();

    if (listVowels.includes(vowelLower)) {
      quantity += 1;
    }
  });

  return quantity;
}

const name = "Ramon";

const result = countVowels(name, listVowels);
console.log(result);
