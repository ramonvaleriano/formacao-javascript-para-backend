/**
 * Funções em JavaScript.
 */

// Funções.
function soma(a, b){
    const result = a + b;
    return result
}

function exibirMensagem(mensagem){
    console.log(mensagem)
}

const somaDoisNumero = soma(1, 2);
console.log(`A soma de dois número é: ${somaDoisNumero}`)

exibirMensagem("Lá ele!")

// Usando uma função dentro da outra.
exibirMensagem(soma(2, 2))

