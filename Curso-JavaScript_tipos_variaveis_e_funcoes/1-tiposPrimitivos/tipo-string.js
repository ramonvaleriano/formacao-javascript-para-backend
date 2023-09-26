/*
    Tipos Primitivos:

    Tipo String.
*/

// Trabalhando com Strings.
const primeiroTexto = "Olá, Mundo!";
const segundoTexto = "Meu nome é Ramon!";
const superSenha = "123489senha@#";
const numerosComoString = "123456789";

// Exibição das strings.
console.log("Trabalhando com Strings: ");
console.log(primeiroTexto);

console.log("Me apresentando: ");
console.log(segundoTexto);

console.log("A ta da supersenha: ");
console.log(superSenha);

console.log(`O número como string é: ${numerosComoString}`);

// Trabalhando com citações.
const citacaoPrimeira = 'Aprndendo "JavaScript" no curso do Alura';
const citacaoSegunda = "Irei dominar e muito o 'JavaScript'";

// Exibindo o texto.
console.log("\n");
console.log("Trabalhando com citações: ");
console.log(citacaoPrimeira);
console.log(citacaoSegunda);

// Templete String ou Templete literal.
const meuNome = "Ramon";
const meuSobrenome = "Valeriano";

// Exibindo o texto.
console.log("\n");
console.log("Trabalhando com Templete String ou Templete literal: ");
console.log(`Meu nome é: ${meuNome}, meu sobre nome: ${meuSobrenome}`);

// Concatenação de Strings.
const nomePrimeiro = "Ramon";
const ultimoNome = "Valeriano";
const nomeCompleto = nomePrimeiro + " " + ultimoNome;

// Exibindo o texto.
console.log("\n");
console.log(`Mue primeiro nome: ${nomePrimeiro}`);
console.log(`Meu ultimo nome: ${ultimoNome}`);
console.log(`Meu nome completo: ${nomeCompleto}`);
