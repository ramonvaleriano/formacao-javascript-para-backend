/*
    
    Função de palíndromo
    Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.

    A função deve verificar se a palavra é um palíndromo.

    Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

    A função deve retornar true se a palavra for um palíndromo e false caso contrário.

    Por exemplo:

    isPalindrome('radar') deve retornar true.

    isPalindrome('hello') deve retornar false.

*/

// A função
function isPalindrome(word) {
  let quantity = word.length;
  let word_reverce = "";

  for (let i = quantity - 1; i >= 0; i--) {
    if (quantity - 1 == i) {
      word_reverce = word[i];
    } else {
      word_reverce += word[i];
    }
  }

  console.log(word_reverce);
  console.log(word);

  if (word_reverce == word) {
    return true;
  }
  return false;
}

let result = isPalindrome("radar");
console.log(result);
result = isPalindrome("amor");
console.log(result);
