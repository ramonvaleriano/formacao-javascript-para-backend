/**
 * O São Arrays
 * Métodos de Arrays.
 */

// Estudando alguns método espeficificos dos arrays.

// Unindo dois arrays.

const notas1 = [1, 5, 2, 8, 5, 6]
const notas2 = [4, 6, 1, 0, 3, 7]

console.log(`Notas 1: ${notas1}`)
console.log(`Notas 2: ${notas2}`)

const notas3 = notas1.concat(notas2)

console.log(`Notas 1: ${notas1}`)
console.log(`Notas 2: ${notas2}`)
console.log(`Notas 3: ${notas3}`)

// Filtando os elementos de um array.
const onesFilter = notas3.filter((element) => {
    return element == 1
})

console.log(`Notas iguais a 1: ${onesFilter}`)

// Encontrando o elemento unico da esquerda para direita. 
const elementFind = notas3.find((element) => {
    return element == 5
})

console.log(`Elemento encontrado: ${elementFind}`)

// Encontrando o Index do Elemento.
const indexElement = notas3.findIndex((element) => {
    return element === 8
})

console.log(`Qual o index do elemento 8: ${indexElement}`)

// Encontrando o Index da direita para a esquerda.

const indexDeTrasParaFrente = notas3.lastIndexOf(4)
console.log(`Elemento 4 encontrado no index: ${indexDeTrasParaFrente}`)

// Um for especifico para arrays.
let sumNumbers = 0
const somaNotas = notas3.forEach((data) => {
    sumNumbers += data
})

console.log(`A soma de todas notas são: ${sumNumbers}`)

// Retira o ultimo elemento da lista:
console.log(`As notas antes: ${notas3}`)
const elementLast = notas3.pop()
console.log(`As notas depois: ${notas3}`)
console.log(`Elemento deletado: ${elementLast}`)

// Retira o primeiro elemento do array.
console.log(`As notas antes: ${notas3}`)
const elementFirst = notas3.shift()
console.log(`As notas depois: ${notas3}`)
console.log(`Elemento deletado: ${elementFirst}`)

// Adiciona um elemento no final do array.
console.log(`As notas antes: ${notas3}`)
notas3.push(9.4)
console.log(`As notas depois: ${notas3}`)

// Adicionando um elemento no inicio do array.
console.log(`As notas antes: ${notas3}`)
notas3.unshift(0.4)
console.log(`As notas depois: ${notas3}`)

// reduzindo o array por um filtro de valores.
console.log(`As notas antes: ${notas3}`)
const filterNotas = notas3.reduce((total, valor) => {
    if (valor % 2 == 0)
        return total + valor
})
console.log(`As notas pares, somadas: ${filterNotas}`)

// reduzindo o array por um filtro de valores da direita para a esquerdar.
const sumNotas = notas3.reduceRight((total, valor) => {
    return total + valor
})

console.log(`A soma de todas as notas: ${sumNotas}`)

// Revertendo a ordem do array.
console.log(`As notas antes: ${notas3}`)
notas3.reverse()
console.log(`As notas depois: ${notas3}`)

// Criando um novo array a partir de outro.
console.log(`As notas antes: ${notas3}`)
const newNotas = notas3.slice(0, 5, 1)
console.log(`As novas notas: ${newNotas}`)

// Ordenando o array.
console.log(`Array antes: ${notas3}`)
notas3.sort()
console.log(`Array Ordenado: ${notas3}`)

// Deletando um valor pelo index, e as vezes necessárias.
console.log(`Array antes: ${notas3}`)
notas3.splice(6, 3)
console.log(`Array com elementos removidos: ${notas3}`)

