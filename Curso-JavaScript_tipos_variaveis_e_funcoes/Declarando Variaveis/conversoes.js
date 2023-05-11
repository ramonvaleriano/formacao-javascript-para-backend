// Tipo de dados.

// Booleanos.

// Conversão implicita.
const numero = 456
const numeroString = '456'

console.log('Textando Número e Número String: ')
console.log(numero)
console.log(numeroString)
console.log(numero === numeroString)
console.log(numero == numeroString)
console.log(numero + numeroString)

let numeroConvert = Number(numeroString)
let stringConvert = String(numeroString)

console.log('Convertendo os tipos: ')
console.log(numero + numeroConvert)
console.log(numeroString + stringConvert)

let notANumber = Number('456a')

console.log('Quando for dar NaN:')
console.log(notANumber)

// Conversão explicita. 