/*
    Faça uma estrutura if/else para verificar se um usuário pode dirigir;

    Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH;

    Se a idade for maior que 18 e tem CNH, exiba uma mensagem;

    Se não tiver 18, nem CNH, exiba outra mensagem.
*/

function validaIdade(idade) {
  let vivo = idade > 0;

  if (vivo && idade >= 18) {
    return true;

  } else if (vivo && idade < 18) {
    return false;

  } else {
    return false;
  }
}

function validaCNH(responseIdade, CNH){
    if (responseIdade && CNH){
        console.log('Tem mais que 18 anos e tem CNH')
    }

    else if(responseIdade && !CNH){
        console.log('Tem mais de 18 anos, mas não tem CNH')
    }

    else{
        console.log('Não pode ter CNH.')
    }
}

let idade = 17, cnh = false

validaCNH(validaIdade(idade), cnh)

cnh = true

validaCNH(validaIdade(idade), cnh)

idade = 18, cnh = false

validaCNH(validaIdade(idade), cnh)

idade = 18, cnh = true

validaCNH(validaIdade(idade), cnh)

