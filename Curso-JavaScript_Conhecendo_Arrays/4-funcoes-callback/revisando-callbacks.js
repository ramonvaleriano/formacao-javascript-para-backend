/**
 * Funções callback
 * Revisando callbacks
 */

// Criando um função para o aprendizado.
const validaArray = (arrayDados) => {
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("ERROR - Dado não pode ser usados!");
    return false;
  }

  console.log("Tipo de dado validado.");
  return true;
};

function atualizaNota(arrayDados) {
  if (!validaArray) {
    console.log("Não será possível atualizar os dados");
    return null;
  }

  const notasAtualizadas = arrayDados.map((dado) => {
    if (dado + 1 >= 10) {
      dado = 10;
      console.log('A nota se tornou a máxima!')
    } else if (dado <= 0) {
      dado = 0;
      console.log('Aluno com nota zerada.')
    } else {
      dado += 1;
      console.log(`Aluno com nota atualizada: ${dado}`)
    }

    return dado;
  });

  return notasAtualizadas;
}

// Dados para uso da questão.
const notas = [10, 9.5, 8, 7, 6];

// Testandoa a função.
console.log(`Como são as notas: ${notas}`)
const notasAtualizadas = atualizaNota(notas)
console.log(`Notas atualizadas: ${notasAtualizadas}`)