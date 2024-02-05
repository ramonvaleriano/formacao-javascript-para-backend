/**
 * Alterando arrays.
 * 7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
 */

// Função para resolução da questão.
function listaTresLinhasTresColunas() {
  const arrayGeral = new Array();
  for (let i = 1; i <= 3; i++) {
    console.log(`Loop: ${i}`);
    let arrayTemporario = new Array();
    for (let l = 1; l <= 3; l++) {
      arrayTemporario.push(l);
    }
    console.log(`Array criado: ${arrayTemporario}`);
    arrayGeral.push(arrayTemporario);
  }
  return arrayGeral;
}

// Executando a questão.
const arrayGeral = listaTresLinhasTresColunas();
console.log(arrayGeral);
arrayGeral[2].splice(1, 0, 15);
console.log(arrayGeral);
