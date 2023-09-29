/**
 * Declarando Variáveis:
 * Tipos: Var, Let e Const.
 */

var altura = 10;
var comprimento = 30;

var area = altura * comprimento;

// Testando os resultados da variável do tipo var.
console.log("Vamos analisar cada variável e seu resultado: ");
console.log(`A sua altura: ${altura}`);
console.log(`Temos o nosso comprimento: ${comprimento}`);
console.log(`Temos a nossa area: ${area}`);

// Declerando a var depois do uso dela.
console.log(`Var sendo declarada depois: ${varDepois}`);
var varDepois = 33;

// Analisasando dados com let.

let primeiroNumero = 10;
let segundoNumero = 20;

let soma = primeiroNumero + segundoNumero;
let alturaY = 10;
let comprimentoX = 5;

// Testadno o resultado da let.
console.log("\n");
console.log(`Testando as variáveis com let: `);
console.log(`O primeiro número: ${primeiroNumero}`);
console.log(`O segundo número: ${segundoNumero}`);
console.log(`A soma dos números: ${soma}`);

// Ainda com o let.
let formaGeometrica = "retangulo";
let areaGeo;

if (formaGeometrica === "retangulo") {
  areaGeo = comprimentoX * alturaY;
} else if (formaGeometrica === "triangulo") {
  areaGeo = (comprimentoX * alturaY) / 2;
}
console.log("\n");
console.log(`A forma exigida: ${formaGeometrica}`);
console.log(`A area: ${areaGeo}`);

// Analisando dados com const.
const alturaConst = 10;
const comprimentoConst = 5;

const formaGeometricaConst = "quadrado";
if (formaGeometrica === "quadrado") {
  const areaConst = alturaConst ** 2;
} else if (formaGeometrica === "triangulo") {
  const areaConst = (alturaConst * comprimentoConst) / 2;
} else {
  const areaConst = null;
}
console.log("\n");
console.log(`A area constante é: ${areaConst}`);
