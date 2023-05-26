/*Introdução a arrays*/

// Dados das notas
const notas = [10, 3, 5, 10, 21, 53];
console.log(`Notas usadas para os dados: ${notas}`);

// Calculando soma por função comum.
function mediaSomaComum(listaNotas) {
  let somaNotas = 0;
  for (i = 0; i < listaNotas.length; i++) {
    somaNotas += listaNotas[i];
  }

  let media = somaNotas / listaNotas.length;

  return media;
}

const mediasNotas1 = mediaSomaComum(notas);
console.log("\nMédias das notas: ");
console.log(mediasNotas1);

// Adicionando elementos.
function adicionaElemento(listaDados, elemento) {
  listaDados.push(elemento);
}
console.log("\nAdicionando dados: ");
adicionaElemento(notas, 999);
console.log(notas);

// Deletando o ultimo elemento.
notas.pop()
console.log('\nDeletando o ultimo elemento: ')
console.log(notas)
