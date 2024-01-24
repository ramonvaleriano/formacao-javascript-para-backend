/**
 * Funações CallBacks
 * Map
 */

// Dados para serem trabalhados.
const notas = [10, 9.5, 8, 7, 6];

// Criando uma função para ser usada intenamente um callback.

function pontoExtra(notas, pontoExtra = 0) {
  const notasAtualizadas = notas.map((nota) => {
    let novaNota = nota + pontoExtra;
    // if (novaNota >= 10){
    //     novaNota = 10
    // }
    novaNota = novaNota >= 10 ? 10 : novaNota;
    return novaNota;
  });

  return notasAtualizadas;
}

// Testando os dados.
console.log(notas);
const notasAuteradas = pontoExtra(notas, 1);
console.log(notasAuteradas);
