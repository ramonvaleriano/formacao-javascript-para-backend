/**
 * Usando o for classiso
 */


// Array usado para estudo
const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// Usando apens o for Classico
let soma = 0

for (let i=0;i<notas.length;i++){
    soma += notas[i]
}

let mediaForClassico = soma /notas.length

console.log(`A media usando for Classico: ${mediaForClassico}`)

// Usando for...of
soma = 0
for (const nota of notas){
    soma += nota
}

mediaForClassico = soma /notas.length
console.log(`A media usando for of: ${mediaForClassico}`)

// Usando for...in
soma = 0
for (const nota in notas){
    soma += notas[nota]
}

mediaForClassico = soma /notas.length
console.log(`A media usando for in: ${mediaForClassico}`)

// Usando foreach

soma = 0
notas.forEach((nota, indice) => {
    soma += nota
})

mediaForClassico = soma /notas.length
console.log(`A media usando for each: ${mediaForClassico}`)
