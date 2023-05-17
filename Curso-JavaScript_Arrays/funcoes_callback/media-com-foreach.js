/*Tentando entender como funciona o forEach*/
const notas = [10, 6.5, 8, 7.5];

// Testando saída.
notas.forEach(function () {
  console.log("Olá");
});

// Fazendo a média com o forEach agora.
let somaNumeros = 0;
let media = 0;

notas.forEach(function (nota) {
  somaNumeros += nota;
});

media = somaNumeros / notas.length;

console.log(`A media das notas: ${media}`);
