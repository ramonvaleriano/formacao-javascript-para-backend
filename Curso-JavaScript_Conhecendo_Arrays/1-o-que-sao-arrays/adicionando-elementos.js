/**
 * O que são Arrays
 * Adicionando Elementos
 */

// Dados para serem trabalhados
const notas = [10, 6, 8];

// Criando função para adicionar elementos ao array.
function adicionarElemento(notas, elemento) {
  if (Array.isArray(notas) && elemento) {
    notas.push(elemento);
  }
}

// Testando dados.
console.log(`O array atual: ${notas}`);
adicionarElemento(notas, 7);
console.log(`O array atualizado: ${notas}`);
