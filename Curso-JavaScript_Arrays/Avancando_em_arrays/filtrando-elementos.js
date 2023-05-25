/*Aprendendo a filtrar elementos*/

// Listas para serem usadas.
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.6, 8, 7.5]

const reprovados = alunos.filter((aluno, indice) => {
     return medias[indice] < 7
})

console.log(reprovados)

const aprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7
})
console.log(aprovados)