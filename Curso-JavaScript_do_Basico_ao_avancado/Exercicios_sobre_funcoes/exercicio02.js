/*
    Exercício 02:

    Criar uma função que recebe um parâmetro de idade
    E umprimir essa segunte mensagem: Você tem x idade.
*/

const imprimirMensage = (idade) => {
    if (idade <= 0){
        console.log('Sua idade não existe')
    }
    else{
        console.log(`A sua idade: ${idade}`)
    }
}

imprimirMensage(32)
imprimirMensage(-2)
imprimirMensage(0)