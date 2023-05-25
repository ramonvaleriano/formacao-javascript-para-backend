/*Somando com reduce*/

// Dados para manipulação.
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Usando reduce para somar todas as notas.
function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const media = somaDasNotas / notasDaSala.length;

  console.log(`A média das notas: ${media}`);
  return media;
}

const mediaJS = calculaMedia(salaJS);
