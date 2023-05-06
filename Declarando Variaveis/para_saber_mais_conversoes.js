// Convertendo Numeros para Strings.

let numberPhone = 1234556789
let stringNumberPhone = String(numberPhone)
let toStringNumberPhone = numberPhone.toString()

console.log('Testando as conversões de números para string: ')
console.log(numberPhone)
console.log(stringNumberPhone)
console.log(toStringNumberPhone)

// Convertendo Booleans para Strings.

let dataBool = false
let stringBool = String(dataBool)

let dataBool1 = true
let stringBool1 = dataBool.toString()

console.log('\nTestando a conversão de booleano para String: ')
console.log(dataBool)
console.log(stringBool)
console.log(dataBool1)
console.log(stringBool1)

// Convertendo String em Números

let string1 = '123'
let string2 = '456'

let number1 = Number(string1)
let number2 = parseInt(string2)

console.log('\nTestando as conversões de string para números: ')
console.log(number1)
console.log(number2)

console.log(+ string1 * + string2)

console.log(number1 + number2)

// Gerando NaN

let nome = 'Leonardo'
let conversaoNome = Number(nome)

console.log('Gerando o NaN')
console.log(conversaoNome)
console.log(+ nome)

// Booleano para número

let dataBoolean1 = true
let dataBoolean2 = false

let numberBool = Number(dataBoolean1)

console.log('Testando a conversão de booleano para número: ')
console.log(numberBool)
console.log(+ dataBoolean2)
