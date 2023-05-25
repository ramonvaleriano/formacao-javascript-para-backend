// Lista para se trabalhar.
const alunos = ["Ramon", "Milla", "Gael", "Dante", "Rayan", "Caio"];
const medias = [6, 10, 10, 9, 7, 5.4];

const listaAlunosMedias = [alunos, medias];

// Função para validação e exibição dos dados.
function exibirNomeENota(nome, lista) {
  console.log("\nValidando dados do aluno: ");

  const [alunosLista, mediaLista] = lista;

  if (alunosLista.includes(nome)) {
    const indice = alunosLista.indexOf(nome);
    const nota = mediaLista[indice];

    console.log(`Aluno: ${nome}, media: ${nota}`);
    
  } else {
    console.log("Aluno não encontrado!");
  }
}
