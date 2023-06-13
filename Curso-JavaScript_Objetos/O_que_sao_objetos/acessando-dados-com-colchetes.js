/*Acessando dados com calchetes.*/

// Acessando dados com colchetes.
const cliente = {
  nome: "Ramon",
  idade: 33,
  cpf: "122333444455555",
  email: "ramonramon@email.com",
};

console.log("Acessando dados com colchetes: ");
console.log(`Nome: ${cliente["nome"]}`);
console.log(`CPF: ${cliente["cpf"]}`);
console.log(`Os 5 primeiro números do cpf: ${cliente["cpf"].substring(0, 5)}`);

// COletando apeans as chaves.
const chaves = Object.keys(cliente);
console.log(`Todas as chaves usadas no objeto: ${chaves}`);

// Coletando todos os valores com forEach.
console.log("\nColetando todos os valores com forEach: ");
chaves.forEach((chave) => {
  console.log(`Para a chave "${chave}" temos o valor: "${cliente[chave]}"`);
});

// Coletando todos os valores por método.
console.log("\nColetando todos os valores por um método: ");
const valores = Object.values(cliente);
console.log(`Os valores obtidos:  ${valores}`);
