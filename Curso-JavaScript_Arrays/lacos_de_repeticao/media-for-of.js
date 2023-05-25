/*Aprendendo a usar for of*/
// Passando oe elemento para testar o for of

let notas = [10, 6.5, 8, 7.5];

console.log('Testando elemento usando for of')

for(let elemento of notas){
    console.log(elemento)
}

// Calculando a média usando for of.

let somaNotas = 0
let media = 0

for(let elemento of notas){
    somaNotas += elemento
}

media = somaNotas / notas.length

console.log('\nA media das notas usando for of: ')
console.log(media)