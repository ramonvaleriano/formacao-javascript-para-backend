/*Função Math*/

const { pid } = require("process");

console.log("Vamos usar alguns metodos da função math: ");

// Usando um lista para comparar.
const listaDados = [1, 4, 2, 6, 2, 8, 99];

console.log(`A lsita de dados: ${listaDados}`);
console.log(`O maior número da lista: ${Math.max(...listaDados)}`);

// Retornando direito da função.
console.log("1, 4, 2, 7, 33, 6");
console.log(Math.max(1, 4, 2, 7, 33, 6));

// Retornando o menor valor da lista.
console.log(`A lsita de dados: ${listaDados}`);
console.log(`O menor número da lista: ${Math.min(...listaDados)}`);

// Validando arredondamento de valor.
console.log(`O valor de pi, sem arredondar: ${Math.PI}`);
console.log(`Arredondando o valor de pi ${Math.round(Math.PI)}`);

// Validando arrendondamento para cima.
console.log(`O valor de pi, sem arredondar: ${Math.PI}`);
console.log(`Arredondando o valor de pi para cima: ${Math.ceil(Math.PI)}`);
