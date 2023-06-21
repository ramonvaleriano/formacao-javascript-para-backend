/*Argumentos opcionais para passagem em funções*/

function nomeComIdade(nome, idade) {
  if (idade == undefined) {
    console.log(`Seu nome é: ${nome}`);
  } else {
    console.log(`Seu nome é: ${nome}, sua idade: ${idade}`);
  }
}

nomeComIdade("Ramon");
nomeComIdade("Milla", 32);


