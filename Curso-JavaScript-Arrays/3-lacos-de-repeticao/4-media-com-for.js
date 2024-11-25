/**
 * Fazendo a media dos dados com os tipos de for
 */

// Array usado para estudo
const notas = [10, 8.5, 5, 6.5, 8, 7.5];
console.log(`Array de dados: ${notas}`)

// For Classico
let somaForClassico = 0
for (let i = 0; i< notas.length; i++){
    somaForClassico += notas[i]
}

let mediaForClassico = somaForClassico / notas.length

console.log(`Media usando for Classiso: ${mediaForClassico}`)

// Usando for..of
let somaForOf = 0 
for (nota of notas){
    somaForOf += nota
}

let mediaForOf = somaForOf / notas.length

console.log(`Média usando For Of: ${mediaForOf}`)

// Usando for...in
let somaForIn = 0
for (nota in notas){
    somaForIn+= notas[nota]
}

let mediaForIn = somaForIn/notas.length

console.log(`Média usando For In: ${mediaForIn}`)

// Usando For Each
let somaForEach = 0
notas.forEach((nota, indice) => {
    somaForEach += nota
})

let mediaForEach = somaForEach / notas.length

console.log(`Média usando ForEach: ${mediaForEach}`)
