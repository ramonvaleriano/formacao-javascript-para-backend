// Como se adicionar novos valores em uma lista.

const notas = [10, 8, 6.7]

const media = (notas[0], notas[1], notas[2])/notas.length

console.log('Calculando a média dos números: ')
console.log(media)
console.log(`A lista de dados: ${notas}`)

// Adicionando um novo elemento.
notas.push(7)

console.log(`A lista de dados: ${notas}`)
