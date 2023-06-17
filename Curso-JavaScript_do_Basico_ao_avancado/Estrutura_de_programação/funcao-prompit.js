/*Função Prompt*/

//let nome = prompt("Qual a sua idade: ");

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let meuNome = ''

leitor.question("Qual é o seu nome? ", (nome) => {
    meuNome = nome
    console.log(`Meu nome é: ${meuNome}`);
    leitor.close()
})
