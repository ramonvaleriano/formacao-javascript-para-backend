/*Avançando ainda mais com os arrays.*/

// Dados para estudo.
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Entendendo como o filter funciona.
console.log('Testando o uso do filter:')
let reprovados = alunos.filter((nome, indice) =>{
    console.log(`${nome} -- ${indice}`)
})

// Usado o filter de fato.
console.log('\nUsando o filter de fato:')
reprovados = alunos.filter((nome, indice) => {
    if (medias[indice] < 7){
        return nome
    }
})

console.log(`Resultado: ${reprovados}`)

// Usando com uma função externa.
console.log('znUsando uma função externa')
function listaReprovados(nome, indice){
    if (medias[indice] < 7){
        return nome
    }
}
reprovados = alunos.filter(listaReprovados)
console.log(`Resultado: ${reprovados}`)
console.log(`Qual o tipo de dado de retorno: ${typeof (reprovados)}`)

// Invertendo o desejado.
console.log('\nO que acontece se invertemos a condicional: ')
let aprovados = alunos.filter((nome, indice) => {
    if (medias[indice] >= 7){
        return nome
    }
})

console.log(`Resultado: ${aprovados}`)
console.log(`Qual o tipo de dado de retorno: ${typeof (aprovados)}`)

// Usando filter sem o if
console.log('\nUsando filter sem o if')
reprovados = alunos.filter((nome, indice) => {
    return medias[indice] < 7
})
console.log(`Resultado: ${reprovados}`)

// Testando condicional.
const variavelTeste = 'Marcos'
console.log('Testando variável:')
console.log(variavelTeste == reprovados)
console.log(variavelTeste === reprovados)
console.log(variavelTeste === String(reprovados))

