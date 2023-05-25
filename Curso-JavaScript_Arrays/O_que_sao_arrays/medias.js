// Calculando uma média sem usar um Array ou Lista.

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4)/4;

console.log('Media das 4 notas: ')
console.log(media)

// Calculando a média com um Array.

const notas = [nota1, nota2, nota3, nota4]

mediaArray = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log('\nMedia das notas em uma lista: ')
console.log(mediaArray)
console.log(`A quantidade de dados dentro da lista: ${notas.length}`)
console.log(`O que há na lista: ${notas}`)