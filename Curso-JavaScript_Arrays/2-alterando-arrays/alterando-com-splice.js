/**
 * Alerando arrays.
 * Alterando com splice.
 */

// Dados que serão usados.
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(`Lista de nomes: ${nomes}`);

nomes.splice(1, 1);

console.log(`Lista dos nomes Atualizados: ${nomes}`);

nomes.splice(2, 1, "Ramon");

console.log(`Lista dos nomes Atualizados: ${nomes}`);

const novosNomes = ["Milla", "Gabriela"];
const nomeJuntos = [...nomes, ...novosNomes];

console.log(`A lista de nomes: ${nomeJuntos}`);

nomeJuntos.splice(3, 2, "Valeriano", "Larissa");

console.log(`Lista de nomes atualizada: ${nomeJuntos}`);
