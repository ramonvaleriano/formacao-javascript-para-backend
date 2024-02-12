/**
 * Funções Callbacks
 * Desafio 03
 * 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
 * Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
 * Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos.
 * Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
 */

// Criando função para resolução da questão.
const validaArray = (arrayDados) => {
  // Função para validar array
  if (!Array.isArray(arrayDados) || arrayDados.length < 0) {
    console.log("ERROR - Dado não pode ser usados!");
    return false;
  }

  return true;
};

function unirArrays(arrayA, arrayB) {
  if (!validaArray(arrayA) || !validaArray(arrayB)) {
    console.log("Dados invalidos para uso!");
    return new Array();
  }

  let uniorArray = new Array();

  if (arrayA.length > 0 || arrayB.length > 0) {
    uniorArray = arrayA.concat(arrayB);
  } else if (arrayA.length > 0 || arrayB.length === 0) {
    uniorArray = arrayA;
  } else if (arrayA.length === 0 || arrayB.length > 0) {
    uniorArray = arrayB;
  } else {
    uniorArray = new Array();
  }
  return uniorArray;
}

const procuraNome = (uniorArray, nomeProcurado) => {
  if (!validaArray(uniorArray)) {
    console.log("Dados não são usáveis");
    return null;
  }

  if (uniorArray.length === 0) {
    console.log("Array de dados zerados.");
    return new Array();
  }

  if (!nomeProcurado) {
    console.log("Não há nome para ser procurado.");
    return null;
  }

  const dadoFiltrado = uniorArray.find((nome) => {
    if (nome.toLowerCase() === nomeProcurado.toLowerCase()) {
      return nome;
    }
  });

  if (dadoFiltrado) {
    console.log(`Dado encontrando: ${dadoFiltrado} --> ${nomeProcurado}`);
    return dadoFiltrado;
  }

  console.log("Dado não foi encontrado.");
  return null;
};

// Dados para test.
const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];
const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];

// Testando dados.
console.log(`Turma A: ${nomesTurmaA}`);
console.log(`Turma B: ${nomesTurmaB}`);

const todosAlunos = unirArrays(nomesTurmaA, nomesTurmaB);
console.log(`Turma Unidas: ${todosAlunos}`);
const nomeEncontrado = procuraNome(todosAlunos, "ana SouZa");
console.log(`Nome encontrado: ${nomeEncontrado}`);
