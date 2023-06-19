/*
    Crie uma constante com o seu nome como valor;

    Depois uma estrutura if que verifica se o seu nome é o que está na constante;

    Se estiver, emita uma mensagem de saudação com console.log()
*/

const nome = null
console.log(typeof nome)

if ((typeof nome == 'string') && nome == 'Ramon'){
    console.log('Bem vindo Ramon!')
}

else if(typeof nome != 'string'){
    console.log('Tipo de dado incorreto.')
}

else if((typeof nome == 'string') && nome != 'Ramon'){
    console.log('Não é bem vindo!')
}

else{
    console.log('Está tudo errao de vez.')
}