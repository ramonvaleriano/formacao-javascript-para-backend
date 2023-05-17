/*Vamos focar como fazer loop em matrizes.*/
// Vamos calcular as médias.
const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0
let media = 0

for(let i=0;i<notas.length;i++){
    somaDasNotas += notas[i]
}

media = somaDasNotas / notas.length

console.log('A media das notas: ')
console.log(media)

// Criar a media com base em uma Matriz.

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let mediaNotas = 0
let somtaTodaNotas = 0
let quantidade = 0

for(let i = 0; i<notasGerais.length; i+=1){
    for(let j = 0; j<notasGerais[j].length;j++){
        somtaTodaNotas += notasGerais[i][j]
        quantidade += 1
    }
}

mediaNotas = somtaTodaNotas / quantidade

console.log('Media total de uma Matriz: ')
console.log(mediaNotas)

