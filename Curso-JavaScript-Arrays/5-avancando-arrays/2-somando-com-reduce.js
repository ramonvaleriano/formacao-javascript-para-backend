/**
 * Somando dados com reduce
 */

// Arrays ncessários
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

console.log(`Sala Js: ${salaJS}`);
console.log(`Sala Java: ${salaJava}`);
console.log(`Sala Python: ${salaPython}`);

// Função para somar as notas
function calculaMedia(listaDeNotas) {
  const somaNotas = listaDeNotas.reduce((acumulador, nota) => {
    let somaUnica = acumulador + nota;
    return somaUnica;
  }, 0);

  const media = somaNotas / listaDeNotas.length;

  return media;
}

const mediajs = calculaMedia(salaJS);
const mediaJava = calculaMedia(salaJava);
const mediaPython = calculaMedia(salaPython);

console.log(`Calculando médiaJs: ${mediajs}`);
console.log(`Calculando médiaJs: ${mediaJava}`);
console.log(`Calculando médiaJs: ${mediaPython}`);
