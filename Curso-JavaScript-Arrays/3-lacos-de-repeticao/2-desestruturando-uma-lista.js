/**
 * Desestruturando Uma lista
 */

// Lista com dados usados
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// Tornando array de duas dimensões
const lista = [alunos, medias]

// Criando função para procurar nota a partir de um dado passado como parÂmetro.
const encontraNota = (lista, nomeAluno) => {
    // Destruturando uma lista em duas
    const [alunos, medias] = lista
    let nota = null
    if(alunos.includes(nomeAluno)){
        let indexAluno = alunos.indexOf(nomeAluno)

        nota = medias[indexAluno]
    }
    
    return nota
}

// Testando função desejada
let nomeDoAluno = 'Juliana'
let nota = encontraNota(lista, nomeDoAluno)
console.log(`O Aluno: ${nomeDoAluno}, tem a nota: ${nota}`)

nomeDoAluno = 'Ramon'
nota = encontraNota(lista, nomeDoAluno)
console.log(`O Aluno: ${nomeDoAluno}, tem a nota: ${nota}`)

