// Como podemos concatenar varias arrays, de diversas formas.

const arrayOriginal = ['Ramon', 'Milla']
const arraySecundaria = ['Gael', 'Dante', 'Rayan']

console.log('As arrays originais: ')
console.log(arrayOriginal)
console.log(arraySecundaria)

// Concatenando as listas em uma só.

const arrayFamilia = arrayOriginal.concat(arraySecundaria)
console.log('\n\nAs arrays originais: ')
console.log(arrayOriginal)
console.log(arraySecundaria)
console.log('Como ficou a concatenção desses dados: ')
console.log(arrayFamilia)

