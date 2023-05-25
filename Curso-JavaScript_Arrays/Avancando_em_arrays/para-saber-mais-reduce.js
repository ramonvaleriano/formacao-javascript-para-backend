/*Para saber mais reduce*/

// Usando dados para entender como funciona o reduce.

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, numero) => acc + numero,0)

console.log(`A soma dos números: ${soma}`)