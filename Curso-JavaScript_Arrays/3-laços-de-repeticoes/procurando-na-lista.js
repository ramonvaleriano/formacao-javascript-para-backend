/**
 * Laçoes de Repetições
 * Procurando na Lista.
 */

// Dados para o uso do laço de repetição.
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// Função para exibir nome do aluno e a nota dele de form mais simples.
function exibirAlunoEnota(listaAlunoEMedias) {
  if (!listaAlunoEMedias) return null;

  if (listaAlunoEMedias.length === 2) {
    for (let i = 0; i < listaAlunoEMedias[0].length; i++) {
      console.log(
        `O nome do Aluno: ${listaAlunoEMedias[0][i]} - A sua Nota: ${listaAlunoEMedias[1][i]}`
      );
    }
  }
}

const alunoNota = (nomeAluno, listaDeAlunosEMedias) => {
    if (listaDeAlunosEMedias[0].includes(nomeAluno)){
        console.log(`Nome do Aluno: ${nomeAluno}, se encontra no sistema.`)
        let indexAluno = listaDeAlunosEMedias[0].indexOf(nomeAluno)
        let notaAluno = listaDeAlunosEMedias[1][indexAluno]
        console.log(`Aluno: ${nomeAluno} - Média: ${notaAluno}`)
    } 
    else{
        console.log(`Nome do Aluno: ${nomeAluno}, não se encontra no sistema.`)
        return null;
    }
}

// Testando as funções.

exibirAlunoEnota(listaDeAlunosEMedias);
alunoNota("Juliana", listaDeAlunosEMedias)
alunoNota("Ramon", listaDeAlunosEMedias)
