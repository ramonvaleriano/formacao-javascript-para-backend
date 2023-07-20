/*
    Objetos
*/

// Estudando objetos.
console.log("Estudando os objetos");

let pessoa = {
  nome: "Ramon",
  profissao: "Programador",
  idade: 33,
};

console.log(pessoa.nome);
console.log(pessoa["profissao"]);
console.log(pessoa.idade);

// Objeto com uma string dentro.
console.log('Validando um objeto com uma função dentro.')
let cachorro = {
    patas: 4,
    nome: 'Dog',
    latir: function(){console.log('Au Au')}
}

console.log('O que há dentro do objeto Cachorro')
console.log(cachorro)
console.log('Usando a função interna do objeto: ')
console.log(cachorro.latir())