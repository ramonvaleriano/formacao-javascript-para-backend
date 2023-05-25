// Aprendendo a usar alguns métodos no array.

// Concatenando com concact.
console.log('Trabalhando com Arrays: ')

const listaDados1 = [1, 2, 3, 4, 5]
const listaDados2= [6, 7, 8, 9, 0]

console.log(`Lista1: ${listaDados1}`)
console.log(`Lista2: ${listaDados2}`)

const listaConcat = listaDados1.concat(listaDados2)
console.log(`\nLista Concatenada: ${listaConcat}`)

// Filtrando dados usando filter.
const filtrados = listaConcat.filter(pares => pares % 2 ==0);
console.log(`\nNúmero pares: ${filtrados}`)

// Filtrando com find.
const primeiroPar = listaConcat.find(pares => pares % 2 ==0);
console.log(`\nPrimeiro número par: ${primeiroPar}`)

// Filtrando e retornando o index.
const indexElemento = listaConcat.findIndex(oito => oito == 8)
console.log(`\nO index do elemento 8 é: ${indexElemento}`)

// Filtrando e retornando o index contando de trás para frente.
const indexElementoInverso = listaConcat.lastIndexOf(oito => oito == 8)
console.log(`\nO index do elemento 8 é: ${indexElementoInverso}`)