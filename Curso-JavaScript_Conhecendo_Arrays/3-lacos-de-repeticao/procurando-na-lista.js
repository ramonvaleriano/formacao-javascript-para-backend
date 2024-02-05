/**
 * Laços de Repetição
 * Procurando na lista.
 */

// Criando uma função para procurar nome da pessoa na lista.
function nomeDoAlunoNaLista(nomeDoAluno, listaDeNomes) {
  if (!Array.isArray(listaDeNomes) || listaDeNomes.length <= 0) return null;

  if (listaDeNomes.includes(nomeDoAluno)) {
    const indiceAluno = listaDeNomes.indexOf(nomeDoAluno);
    return indiceAluno;
  }

  return null;
}

function coletandoMedia(indice, listaDeMedias) {
  if (!Array.isArray(listaDeMedias) || listaDeMedias.length <= 0 || indice < 0)
    return null;

  const media = listaDeMedias[indice];

  return media;
}

const exibeNomeNota = (arrayDuplo, nomeDoAluno) => {
  if (!Array.isArray(arrayDuplo) || arrayDuplo.length <= 0) return null;

  const nomesAlunos = arrayDuplo[0];
  const notasAlunos = arrayDuplo[1];

  const indiceAluno = nomeDoAlunoNaLista(nomeDoAluno, nomesAlunos);
  if (!indiceAluno) console.log("Aluno não encontrado.");

  const notaAluno = coletandoMedia(indiceAluno, notasAlunos);
  if (!notaAluno) console.log("Media não encontrada");

  return notaAluno;
};

// Dados para uso.
const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

// Arrays duplo.
const arrayDuplo = [alunos, medias];

// Testando a questão.
const mediaDoAluno = exibeNomeNota(arrayDuplo, "Caio");
console.log(`A média do aluno: ${mediaDoAluno}`);
