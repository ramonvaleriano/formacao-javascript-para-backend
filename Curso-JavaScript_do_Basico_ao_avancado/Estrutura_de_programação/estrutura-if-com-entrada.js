function leitorDadosExternos(mensagem) {
  let leitura = require("readline");
  let leitor = leitura.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  leitor.question(mensagem, (dado) => {
    let mensagemRetorno = testandoIdade(dado)

    console.log(mensagemRetorno)

    leitor.close();
  });
}

function testandoIdade(idade){
    if (idade >= 18){
        mensagem = 'Você pode entrar na festa!'
    }
    else{
        mensagem = 'Você não pode entrar na festa ainda!'
    }
    return mensagem
}


leitorDadosExternos('Qual a sua idade: ')
