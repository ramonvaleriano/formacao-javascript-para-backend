/**
 * Alterando arrays.
 * 1 - Crie uma função que receba dois arrays e os concatene em um único array.
 */

// Função para resolução do problema.
function concatenaArrays(array1, array2) {
  let array3 = new Array();
  if (!array1 || !array2 || !Array.isArray(array1) || !Array.isArray(array2))
    return new Array();
  if (array1.length > 0 && array2.length > 0) {
    array3 = array1.concat(array2);
  } else if (array1.length > 0 && array2.length <= 0) {
    array3 = [...array1];
  } else if (array1.length <= 0 && array2.length > 0) {
    array3 = [...array2];
  }
  return array3;
}

// Testando dados.
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
console.log(`1° Array: ${array1}`);
console.log(`2° Array: ${array2}`);

const array3 = concatenaArrays(array1, array2);
console.log(`União Array: ${array3}`);
