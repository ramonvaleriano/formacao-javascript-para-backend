/*Entendendo o que são callbacks*/

// Array para estudo.
const nomes = ["Ramon", "Milla", "Gabriela"];

// Usando uma função convencional.
console.log("\nUsando função convencional: ");
nomes.forEach(function (nome) {
  console.log(nome);
});

// Ussando funçao arraw
console.log("\nUsando função Arrow: ");
nomes.forEach((nome) => console.log(`${nome}`));

// Usando função arrow com multiplas linhas.
console.log("\nUsando função Arrow com multiplas linhas: ");
nomes.forEach((nome) => {
  console.log(nome);
});

// Usando um função externa e apenas passa-la como parâmetro.
function funcaoNomes(nome) {
  console.log(nome);
}

console.log("\nUsando uma função externa para passar como parâmetro: ");
nomes.forEach(funcaoNomes);

// Usando a expresão de uma função.

const exibir = function (nome) {
  console.log(nome);
};

console.log("\nUsando função por expressão para estudar: ");
nomes.forEach(exibir);
