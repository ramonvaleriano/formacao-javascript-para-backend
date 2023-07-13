/*
    Exercício 08:

    Escreva uma função que receba uma string;

    Se o texto conter mais de 10 caracteres imprima o texto "Texto muito longo"

    Se contiver menos imprima "Texto dentro do limite"
*/

const contaCaracter = (palavra) => {
    let quantity = palavra.length

    if(quantity > 10){
        console.log('Texto muito longo.')
    }
    else{
        console.log('Texto dentro do limite')
    }
}

contaCaracter('Ramon')
contaCaracter('Ramon Valeriano')