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

console.log('\nUsando vários tipos de forEach: ')
console.log('Usando uma função externa: ')
function exibirAlgo(nome){
    console.log(nome)
}

notas.forEach(exibirAlgo)

console.log('Usando uma função interna: ')
notas.forEach(function (numero){
    console.log(numero)
})

console.log(('Usando arrow funcion:'))
notas.forEach(nota => console.log(nota))

console.log('Usando arrow function multiplas linhas: ')
notas.forEach(nota => {
    console.log(nota)
})