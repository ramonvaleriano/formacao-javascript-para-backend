/*
    O que são Arrays.
*/

// Exemplos simples.

let numeros = [1, 2, 3, 4, 5];
let informacoes = [89, "Ramon", "Valeriano", 71, true];

console.log("Estudando Arryays");
console.log(`Validando os Números: ${numeros}`);
console.log(`Validando as Informações: ${informacoes}`);

// Outros arrays.

let arr = [1, 3, 6, 8, 2]
let nomes = ['Milla', 'Ramon', 'Valeriano']
let bool = [true, false]
let mistura = [89, 'Milla', true]

console.log('Outros arrays')
console.log(arr)
console.log(nomes)
console.log(bool)
console.log(mistura)

// Concatenando listas.
arr = [...arr, ...nomes]
console.log('Validando se a concatenação de dados deu certo: ')
console.log(arr)