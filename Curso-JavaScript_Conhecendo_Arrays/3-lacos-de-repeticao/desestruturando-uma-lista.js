/**
 * Laços de Repetição
 * Desestruturando uma Lista.
 */

// Criando função para resolução da tarefa.

function nomeDoAlunoMedia(arrayDuplo, nomeAluno) {
  if (!Array.isArray(arrayDuplo) || arrayDuplo.length <= 0) return null;

  const [nomesDeAlunos, notasDeAlunos] = arrayDuplo;

  if (nomesDeAlunos.includes(nomeAluno)) {
    const indice = nomesDeAlunos.indexOf(nomeAluno);
    let media = null;

    indice >= 0 ? (media = notasDeAlunos[indice]) : null;

    return media;
  }

  return null;
}

// Dados para uso.
const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

// Arrays duplo.
const arrayDuplo = [alunos, medias];

// Testando os dados.
const mediaAluno = nomeDoAlunoMedia(arrayDuplo, "Ana");
console.log(mediaAluno);
