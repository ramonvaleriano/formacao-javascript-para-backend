/**
 * Tipos Primitivos:
 * Thrufy e Falsy.
 */

// Analisando os booleanos.
const alunoLogado = true;
const alunoMatriculado = false;

// Analisando o thufty e falsy.
const falsyUm = 0;
const thrufyUm = 1;
const stringVazia = "";
const stringComEspaco = " ";
const stringComDado = 'Ramon'

// Comparando as tentativas.
console.log(`falsyUm(${falsyUm}) == false)`);
console.log(falsyUm == false);

console.log(`thrufyUm(${thrufyUm}) == true)`);
console.log(thrufyUm == true);

console.log(`stringVazia(${stringVazia}) == false)`);
console.log(stringVazia == false);

console.log(`stringComEspaco(${stringComEspaco}) == true)`);
console.log(stringComEspaco == true);

console.log(`stringComDado(${stringComDado}) == true)`);
console.log(stringComDado == true);

// Tipos null e undefined.
let variavelUnderfined;
let variavelNull = null;

// Testando os dados que eu acabei de fazer.
console.log('\n')
console.log(`variavelUnderfined(${variavelUnderfined}) => underfined`);
console.log(variavelUnderfined);
console.log(`variavelNull(${variavelNull}) => null`);
console.log(variavelNull);

console.log(typeof variavelUnderfined);
console.log(typeof variavelNull);