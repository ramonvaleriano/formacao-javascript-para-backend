/**
 * O que são arrays.
 * Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
 * Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).
 * Imprima no console o array e também a informação de comprimento do array.
 */

// Criando array esparso.
const arrayEsparso = [1, , 3, , , , , 7];
const quantidadeDeElementos = arrayEsparso.length

// Exibiindo os dados.
console.log(`O array: ${arrayEsparso}`)
console.log(`Quantidade de eelementos: ${quantidadeDeElementos}`)