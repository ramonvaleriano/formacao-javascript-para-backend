/**
 * Usando Set para filtrar dados.
 */

// Dados para trbalho
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
console.log(`Nomes ${nomes}`);

const nomesSemRepeticao = new Set(nomes);
console.log(`Nomes sem repetição: ${nomesSemRepeticao}`);
console.log(nomesSemRepeticao)

const listaAtualizada = Array.from(nomesSemRepeticao);
console.log(`Lista de nomes atualizados: ${listaAtualizada}`);
