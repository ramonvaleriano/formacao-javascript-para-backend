/**
 * Alterando arrays.
 * 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
 * Dicas:
 * Comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
 * você pode resolver usando um for dentro de outro for.
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
