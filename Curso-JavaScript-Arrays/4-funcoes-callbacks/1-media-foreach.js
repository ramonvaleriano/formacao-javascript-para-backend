/**
 * Media com a função callback Foreach
 */

// Array usado para estudo
const notas = [10, 8.5, 5, 6.5, 8, 7.5];
console.log(`Array de dados: ${notas}`)

// Função para somar as notas
const somaNotas = (nota) => {
    somaForEach += nota
}

// Usando For Each
let somaForEach = 0
notas.forEach(somaNotas)

let mediaForEach = somaForEach / notas.length

console.log(`Média usando ForEach: ${mediaForEach}`)