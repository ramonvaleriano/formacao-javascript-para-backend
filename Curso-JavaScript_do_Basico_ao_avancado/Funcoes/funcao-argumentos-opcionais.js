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


function nomeComIdadeNull(nome, idade=null){
  if(!idade){
    console.log(`Meu nome é: ${nome}`)
  }
  else{
    console.log(`Meu nome: ${nome} --> Idade: ${idade}`)
  }
}

nomeComIdadeNull('Ramon')
nomeComIdadeNull('Milla', 32)
