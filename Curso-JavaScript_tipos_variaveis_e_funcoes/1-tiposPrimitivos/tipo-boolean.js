/**
 * Tipos primeitivos:
 * Tipo Bollean.
 */

// Trabalhando com boolean.
const primeiroNumero = 5;
const segundoNumero = 15;
const terceiroNumero = 5;

const comparativo = primeiroNumero === segundoNumero;
const comparativoSegundo = primeiroNumero === terceiroNumero;

let veracidade = false;

// Exibindo o texto.
console.log("Vamos Trabalhar com boolean: ");
console.log(
  `O primeiro número: ${primeiroNumero}; O segundo Número: ${segundoNumero}.`
);
console.log(`Esse número são iguais: ${comparativo}`);

console.log("\n");
console.log(
  `O primeiro número: ${primeiroNumero}; O terceiro Número: ${terceiroNumero}.`
);
console.log(`Esse número são iguais: ${comparativoSegundo}`);

veracidade = primeiroNumero === segundoNumero ? true : veracidade;

console.log("Testando a veracidade das afirmações: ");
console.log(
  `O primeiro número: ${primeiroNumero}; O segundo Número: ${segundoNumero}.`
);
console.log(`A veracidade do dado: ${veracidade}`);

veracidade = primeiroNumero === terceiroNumero ? true : veracidade;
console.log(
  `O primeiro número: ${primeiroNumero}; O terceiro Número: ${terceiroNumero}.`
);
console.log(`A veracidade do dado: ${veracidade}`);
