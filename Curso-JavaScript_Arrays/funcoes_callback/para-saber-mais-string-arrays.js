/*String são arrays*/

const nome = "alura";

let nomeMaiusculo = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculo += nome[i].toUpperCase();
}

console.log(nomeMaiusculo);

const pessoal = "ramon";

let pessoalMaiusculo = "";

for (letra of pessoal) {
  pessoalMaiusculo += letra.toUpperCase();
}
console.log(pessoalMaiusculo);

const primeiroNome = 'Ramon'
const sonbreNome = ' Rodrigues Valeriano'

const nomeCompleto = primeiroNome.concat(sonbreNome)
console.log(nomeCompleto)