/*
    Criar um estrutura if que verifica a entrada na balada, se tiver mais de 18 anos
    pode entrar;

    Armazenar a idade em uma variável com let;

    insira uma instrução console.log("Pode entrar"), caso a pessoa trnha
    mais de 18 anos.
*/

let idade = 20;

if (idade >= 18){
    console.log('Pode entrar')
}

else if (idade < 18 && idade > 0){
    console.log('Não pode entrar.')
}

else{
    console.log('Vocẽ não existe.')
}

