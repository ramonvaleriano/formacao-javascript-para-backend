/**
 * Laçãs de Repetições
 * Callbacks.
 */

// Dados para se Trabalhar.
const nomes = ["Ramon", "Milla", "Gabriela", "Valeriano"];

nomes.forEach(function (nome) {
  console.log(nome);
});

nomes.forEach((nome) => {
  console.log(nome);
});

function exibindoNome(nome) {
  console.log(nome);
}

nomes.forEach(exibindoNome);
