/**
 * Operador Ternário.
 */

// Validando o uso do operador ternário.

let test01 = true;

let result = test01
  ? console.log("Testa 01 deu positivo!")
  : console.log("Testa 01 deu negativo!");

test01 = false;

result = test01
  ? console.log("Testa 01 deu positivo!")
  : console.log("Testa 01 deu negativo!");

// Exemplo visto em aula.

const idadeMinima = 18;
let idadeCliente = 16;

console.log("Vamos analisar o caso para operador ternário:");
console.log(`Idade minina para entrar no bar: ${idadeMinima} anos.`);
console.log(`A idade do cliente: ${idadeCliente} anos.`);

const validador = idadeCliente >= idadeMinima ? console.log('É permitido a entrada no bar.'): console.log('Não é permitida a sua entrada no bar.')
