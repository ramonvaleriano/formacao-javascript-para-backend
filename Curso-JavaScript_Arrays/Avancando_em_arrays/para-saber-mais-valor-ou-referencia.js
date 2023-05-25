/*Para saber mais, valor ou referência.*/

// Copiar com tipos primitivos.
let num1 = 10
let num2 = num1

console.log('Testando variáveis antes orifinais:')
console.log(`Num1 ${num1}`)
console.log(`Num2 ${num2}`)

num2+=10
num1+=5

console.log('Testando variáveis após auterações:')
console.log(`Num1 ${num1}`)
console.log(`Num2 ${num2}`)

// Validando com uma função.
console.log('\nTestando com funções:')
let numeroOriginal = 10;
function alteraNumero(numero){
    numero = 50
    console.log(`Numero origina: ${numeroOriginal}; Novo número: ${numero}`)
}

alteraNumero(numeroOriginal)
console.log(`Como ficou o número original: ${numeroOriginal}`)

// Clonado de forma correta um array e adicionando números.
console.log('Cloanndo a array e adicionando números: ')
const listaNumeros = [1, 4, 6, 2, 5, 9]
const novaListaNumeros = [45, ...listaNumeros, 99]

console.log(`Lista Original: ${listaNumeros}`)
console.log(`Lista copiada: ${novaListaNumeros}`)

function adicionaNumero(lista, numero){
    lista.push(numero)
}

console.log('Como ficou as listas após: ')

adicionaNumero(listaNumeros, 789)
adicionaNumero(novaListaNumeros, 9989)

console.log(`Lista Original: ${listaNumeros}`)
console.log(`Lista copiada: ${novaListaNumeros}`)