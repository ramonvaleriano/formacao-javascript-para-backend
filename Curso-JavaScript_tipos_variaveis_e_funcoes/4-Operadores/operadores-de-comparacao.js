/**
 * Operadores de comparação.
 */

// Comparação Implicita.

const numero = 10;
const text = "10";

console.log(
  `Compara as variáveis numero e text: ${numero} == ${text}: ${numero == text}`
);

// Comparação explicita.

console.log(
  `Compara as variáveis numero e text: ${numero} === ${text}: ${
    numero === text
  }`
);

// Validando o tipo de cada variável.
console.log(typeof numero);
console.log(typeof text);
