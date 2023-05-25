/*Usando For para calucular média*/

// Lista de notas.
const notas = [10, 6.5, 8, 7.5];

// Calculando média com for.
let soma = 0;
let media = 0;

for (let indice = 0; indice < notas.length; indice++) {
  soma += notas[indice];
  console.log(
    `Apenas para validar os dados: Nota -> ${notas[indice]}; Soma: ${soma}`
  );
}

media = soma / notas.length;

console.log(`'A media das notas é: ${media}'`);
