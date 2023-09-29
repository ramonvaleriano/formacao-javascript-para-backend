/**
 * Tipos Primitivos
 * Conversão de tipo.
 */

// Vamos analisar os tipos implicitos e explicitos.

// Tipos explicita.
const numero = 123;
const numeroSting = "123"
// Tipos implicita..
const numeroStringNumero = Number(numeroSting);
const numeroParaString = String(numero);


// Testes.
console.log(numero === numeroSting);

console.log(numero == numeroSting);

console.log(numero + numeroSting);

console.log('\n')
console.log(numeroStringNumero);
console.log(numeroParaString);
console.log(numero + numeroStringNumero);
console.log(numeroParaString + numeroSting);   