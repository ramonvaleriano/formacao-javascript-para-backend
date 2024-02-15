/**
 * Avançando Arrays
 * Clonaar Arrays
 */

// Função para clonar arrays.
const validaArray = (arrayDados) => {
    if (!Array.isArray(arrayDados)) return false
    return true
}

function clonarArray(arrayDados){
    if(!validaArray(arrayDados)){
        console.log('Não foi possível ter acesso a esse Array')
        return arrayDados
    }

    const novoArray = [...arrayDados]

    return novoArray
}

// Dados para teste.
const notas = [7, 7, 8, 9];

// Realizar testes.
console.log("Array Original")
console.log(`Notas original: ${notas}`)

const notasClonadas = clonarArray(notas)
console.log("Array clonado!")
console.log(`Notas Clonadas: ${notasClonadas}`)

let numero = 10;

console.log('Adionando dados para teste: ')
console.log(`Número a ser adionado: ${numero}`)

notasClonadas.push(numero)
console.log(`Notas original: ${notas}`)
console.log(`Notas Clonadas: ${notasClonadas}`)



