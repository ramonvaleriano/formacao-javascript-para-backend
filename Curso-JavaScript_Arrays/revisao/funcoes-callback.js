/*Funcções Callbacks*/

// Lista de dados para trabalhar.
const notas = [10, 6.5, 8, 7.5];

// Usando forEach.
console.log("Usando a forEach: ");
notas.forEach(function passagemNumero(number) {
  console.log(number);
});

// Usando forEache para calcular a media dos número na lista.
console.log("\nUsando for Each para calcular a média: ");
let somaNumero = 0;
notas.forEach(function mediaNotas(numero) {
  somaNumero += numero;
});

let media = somaNumero / notas.length;
console.log(media);

// Usando o forEach com o indice como indicativo.
console.log("\nUsando for Each e o indice como indicativo para a soma: ");
somaNumero = 0;
console.log(`Soma zerada: ${somaNumero}`);
notas.forEach(function (numero, inidice) {
  console.log(`Indice ${inidice} --> ${numero}`);
  somaNumero = +numero;
});

console.log(`Soma: ${somaNumero}`);
media = 0;
media = somaNumero / notas.length;

console.log(`A Média: ${media}`);

// Usando varios tipos de forEach.

console.log("\nUsando vários tipos de forEach: ");
console.log("Usando uma função externa: ");
function exibirAlgo(nome) {
  console.log(nome);
}

notas.forEach(exibirAlgo);

console.log("Usando uma função interna: ");
notas.forEach(function (numero) {
  console.log(numero);
});

console.log("Usando arrow funcion:");
notas.forEach((nota) => console.log(nota));

console.log("Usando arrow function multiplas linhas: ");
notas.forEach((nota) => {
  console.log(nota);
});

/*Usando o map.*/
const novasNotas = [10, 9.5, 8, 7, 6];

// Entendendo como o map funciona.
console.log("\nEntendendo como o map funciona:");
novasNotas.map((nota) => console.log(nota));

// Usando uma função comum.
console.log("\nUsando uma função:");
novasNotas.map(function (nota) {
  console.log(nota);
});

// Retornando um dado do map.
console.log("\nRetornando a soma dos valores acima: ");
let somaLegal = 0;
let somaMap = novasNotas.map((nota) => {
  somaLegal += nota;
  return somaLegal;
});
console.log(`Resultado da soma: ${somaLegal}`);

// Adicionando um número em cada elemento.
console.log("\nAdiconando um numero em cada elemento: ");
let numeroDesejado = 1;
const novaLista1 = novasNotas.map((elemento, indicie) => {
  console.log(`O elemento: ${elemento} -- O indice: ${indicie}`);
  return elemento + numeroDesejado;
});
console.log(`Resultado: ${novaLista1}`);

// Validando se é maior que a média ou não.
console.log("\nValidando se o número é maior que a média ou não: ");
const notasAprovadas = novasNotas.map((numero) => {
  return numero + 1 >= 10 ? 10 : numero + 1;
});

console.log(`resultado: ${notasAprovadas}`);

// Usando map com string, deixando todas as letras padronizadas.
console.log('Padronizando os nomes')
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase()
})

console.log(`Resultado: ${nomesPadronizados}`)