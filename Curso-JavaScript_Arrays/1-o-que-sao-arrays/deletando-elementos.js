/**
 * O Que São Arrays
 * Deletando elementos.
 */

// Criando funções para deletar elementos.

const deleteUnique = (listElements) => {
  // Deletando o último elemento da lista.
  let elementReturn = null;
  if (listElements && listElements.length > 0) {
    elementReturn = listElements.pop();
  }
  return elementReturn;
};

function deleteElement(listElements, element) {
  // Deletando um elemento específico da lista.
  if (listElements && listElements.length > 0 && element) {
    const index = listElements.indexOf(element);
    if (index) {
      listElements.splice(index, 1);
    }
  }
}

// Testando deletar elementos.
const notas = [7, 8, 5, 15];
console.log(`Deletando a última nota das notas: ${notas}`);
deleteUnique(notas);
console.log(`Notas atualizadas: ${notas}`);
deleteElement(notas, 8);
console.log(`Notas atualizadas: ${notas}`);

// Fazendo testes direitos.

const notas2 = [2, 5, 1, 9, 0, 2, 6, 1, 8, 3, 7, 4];

console.log(`Testando deletar de forma escrita, sem funções: ${notas2}`);

let elementLast = notas2.pop();

console.log(`Notas atualizadas: ${notas2}`);
console.log(`Elemento deletado: ${elementLast}`);
