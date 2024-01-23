/**
 * O que são Arrays
 * Adicionando mais elementos.
 */

// Criando array para o aprendizado.

const notas = [7, 8, 5];

// Criando funções para adicionar mais elementos.

const addElementosArray = (listElements, element) => {
  // Adicionando um elemento na lista.
  if (listElements && listElements.length > 0 && element) {
    listElements.push(element);
  }
};

function unionTwoArrays(array1, array2) {
  // Unindo dois arrays.
  if (array1 && array2) {
    array1.concat(array2);
    return array1;
  } else if (array1 && !array2) {
    return array1;
  } else if (!array1 && array2) {
    return array2;
  }
}

// Testando o adicionar dos elementos.
let element = 10;

console.log(`O que há na array: ${notas}`);
console.log(`Elemento a ser adicionado: ${element}`);

addElementosArray(notas, element);

console.log(`a Array atualizada: ${notas}`);
