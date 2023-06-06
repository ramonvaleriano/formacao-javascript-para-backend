/*Para saber mais, como se deletar uma propriedade.*/

// Dados base para o estudo.
const personagem = {
    nome: 'Gandalf',
    classe: 'Mago',
    nivel: '20',
    aliado: {
        nome: 'Saruman',
        classe: 'Mago'
    },
    status: 'Desaparecido'
}

// Aprendendo a deletar dados.
console.log('Dados em sua forma inicial: ')
console.log(personagem)

delete personagem.aliado

console.log('Deletando o aliado:')
console.log(personagem)

// Confirmação se foi deletado.
let statusPersonagem = delete personagem.status

console.log(`Retorno ao deletar: ${statusPersonagem}`)