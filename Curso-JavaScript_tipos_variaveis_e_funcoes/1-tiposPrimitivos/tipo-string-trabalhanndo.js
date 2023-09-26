/*
    Tipos Primitivos

    Tipo String, trabalhando com Strings.
*/

// Trabalhando com Strings.
const cidadePrimeira = "Belo Horizonte";
const cidadeSegunda = "belo horizonte";
const comparativo = cidadePrimeira === cidadeSegunda;

const cidadePrimeiraMinuscula = cidadePrimeira.toLowerCase();
const comparativoSegundo = cidadeSegunda === cidadePrimeiraMinuscula;

const frase = "sexo é a melhor coisa do mundo!";
const quantidadeDeCaracteres = frase.length;

// Exibindo o texto.
console.log("Trabalhando com Strings: ");
console.log(
  `A primeira cidade : ${cidadePrimeira} --> A segunda cidade: ${cidadeSegunda}`
);
console.log(`Os nomes são iguais: ${comparativo}`);

console.log("\n");
console.log(
  `A primeira cidade minuscula: ${cidadePrimeiraMinuscula} --> A segunda cidade: ${cidadeSegunda}`
);
console.log(`Os nomes são iguais: ${comparativoSegundo}`);

console.log("\n");
console.log(`A frase que foi dita: ${frase}`);
console.log(`A frase tem ${quantidadeDeCaracteres} caracteres.`);
