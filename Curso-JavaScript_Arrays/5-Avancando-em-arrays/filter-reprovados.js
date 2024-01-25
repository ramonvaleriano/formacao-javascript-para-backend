/**
 * Avançando em Arrays
 * Filter Reprovados
 */

// Dados para serem usados.
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Função para ser usada como callback e retornar os alunos repravados.
const alunosReprovados = (alunos, medias) => {
  const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
  });

  return reprovados;
};

// Testando os dados.
const reprovados = alunosReprovados(alunos, medias);
console.log(reprovados);
