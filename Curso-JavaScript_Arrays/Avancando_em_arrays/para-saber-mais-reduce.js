/*Para saber mais reduce*/

// Usando dados para entender como funciona o reduce.
// Lista de dados
const numeros = [43, 50, 65, 12]

// Usando reduce com o arrow function
const soma = numeros.reduce((acc, numero) => acc + numero,0)

console.log(`A soma dos números: ${soma}`)

// Usando com uma função criada internamente.
const somaNova = numeros.reduce(function (acc, numero){
    return acc + numero
}, 0)

console.log(`A soma dos números: ${somaNova}`)

// Usando com uma função externa.
function somaDosNumeros(acc, numero){
    return acc + numero
}

const somaNovaDeNovo = numeros.reduce(somaDosNumeros, 0)
console.log(`A soma dos número: ${somaNovaDeNovo}`)