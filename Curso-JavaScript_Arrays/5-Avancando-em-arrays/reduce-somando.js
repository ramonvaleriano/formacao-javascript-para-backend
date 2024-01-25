/**
 * Avançando em Arrays
 * Reduce Somando
 */

// Dados para serem trabalhados.
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Função para ser usada para calcular a médias de cada sala.
function calculaMedia(sala) {
  const mediaDaSala = sala.reduce((acumulador, nota) => {
    const result = acumulador + nota;
    return result;
  }, 0);

  const media = mediaDaSala / sala.length;
  return media;
}

// Testando os dados.
const mediaPython = calculaMedia(salaPython);
const mediaJS = calculaMedia(salaJS);
const mediaDesgraca = calculaMedia(salaJava);

console.log(mediaPython, mediaJS, mediaDesgraca);
