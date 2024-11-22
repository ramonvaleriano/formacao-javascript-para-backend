/**
 * Excluidndo elementos
 */

let arrayDados = new Array(0, 1, 6, 3, 8, 4.5, 7.3, 9.7, 10.2)
console.log(`Array estudada: ${arrayDados}`)

// Deletando o ultimo elemento.
arrayDados.pop()

console.log(`Deletando o ultimo elemento: ${arrayDados}`)

// Deletando o primeiro elemento.
arrayDados.shift()
console.log(`Deletando o primeiro elemento: ${arrayDados}`)

// Deletando um especifico
arrayDados.splice(2, 1)

console.log(`Deletando o elemento da 2 posição: ${arrayDados}`)