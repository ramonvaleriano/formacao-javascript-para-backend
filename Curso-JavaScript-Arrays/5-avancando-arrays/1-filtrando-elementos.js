/**
 * Filtrando elementos
 */

// Arrays para usar os dados.
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];
console.log(`Os alunos: ${alunos}\nAs médias: ${medias}`)

// Filtrando alunos que tenham menos de 4 letras.
const alunosFiltrados = alunos.filter((aluno) => {
  if (aluno.length < 4) {
    let alunoCorreto = aluno;
    return aluno;
  }
});

console.log(`Alunos selecionados: ${alunosFiltrados}`)

// Filtrando alunos acima de media.
const alunosAcimaDaMedia = alunos.filter((aluno, indice) => {
    if (medias[indice] >= 7){
        let alunoAprovado = aluno
        return aluno
    }
})

console.log(`Alunos Aprovados: ${alunosAcimaDaMedia}`)

const alunosAbaixoDaMedia = alunos.filter((_, indice) => {
    if (medias[indice] < 7){
        return _
    }
})

console.log(`Alunos Reprovados: ${alunosAbaixoDaMedia}`)
