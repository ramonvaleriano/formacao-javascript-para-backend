/**
 * O que são Arrays
 * Excluindo Elementos
 */

// Crianção função para deletar elementos do array.
function excluirElementoPop(notas) {
  if (Array.isArray(notas) && notas.length > 0) {
    const deletado = notas.pop();
    console.log(`Elemento deletado: ${deletado}`);
  }
}

const excluirElementoSplice = (notas, indice) => {
  if (Array.isArray(notas) && notas.length > 0) {
    const elemento = notas[indice];
    if (elemento) {
      notas.splice(indice, 1);
      console.log(`Elemeneto deletado: ${elemento}`);
    } else {
      console.log(`Não existe o indice para esse elemento: ${indice}`);
    }
  }
};

// Testando dados.
const notas = [10, 6, 8, 5.5, 10];
