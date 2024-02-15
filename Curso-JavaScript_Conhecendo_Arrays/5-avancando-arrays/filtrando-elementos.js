/**
 * Avançando Arrays.
 * Filtrando Elementos
 */

// Função para filtrar os dados como desajado.

function alunosReprovadas(arrayNotas, arrayAlunos, mediaBase) {
  // Alunos reprovados.
  const notasBaixoDaMedia = arrayNotas.filter((nota, indice) => {
    if (nota < mediaBase) {
      let alunoReprovado = arrayAlunos[indice];
      return alunoReprovado;
    }
  });

  return notasBaixoDaMedia;
}

// Dados para uso da questão.
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Testando dados.
const alunosReprovados = alunosReprovadas(medias, alunos, 7);
console.log(alunosReprovados);
