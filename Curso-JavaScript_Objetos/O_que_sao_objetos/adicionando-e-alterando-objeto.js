/*Adicionando e alterando um objeto.*/

const pessoa = {
  nome: "Ramon",
  profissao: "Desenvolvedor",
};

// Como adicionar uma nova chave e valor.
console.log("Vamos adicionar um novo elemento no objeto: ");

pessoa.telefone = "71 9 9277-4903";

console.log(pessoa);

// Alterando o nome da pessoa:
console.log("\nAletarando o nome da pessoa: ");
pessoa.nome = "Ramon Valeriano";

console.log(pessoa);
