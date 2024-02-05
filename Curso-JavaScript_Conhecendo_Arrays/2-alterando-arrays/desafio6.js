/**
 * Alterando arrays.
 * 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
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
console.log(arrayGeral[1][2]);
