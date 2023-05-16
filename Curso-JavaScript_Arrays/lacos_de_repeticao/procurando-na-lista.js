// Listas para trabalhar.
const alunos = ["Ramon", "Milla", "Gael", "Dante", "Rayan", "Caio"];
const medias = [6, 10, 10, 9, 7, 5.4];

const listaAlunosMedias = [alunos, medias];

// Função para validação de dado.
function exibirNomeENota(nome, lista) {
  console.log("\nValidando nome do alunos na lista: ");
  if (lista[0].includes(nome)) {
    console.log(`${nome} já se encontra cadastrado na lista.`);

    const indice = lista[0].indexOf(nome)
    const nota = lista[1][indice]

    console.log(`A nota do aluno foi ${nota}`)

  } else {
    console.log(`Aluno não encontrado.`);
  }
}

// Chamando a função para validação dos alunos.
exibirNomeENota("Ramon", listaAlunosMedias);
exibirNomeENota("Andréa", listaAlunosMedias);
