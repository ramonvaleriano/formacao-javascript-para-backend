// Usando parâmetros para de um função.

function soma(numero1=0, numero2=0){
    let resultado = numero1 + numero2
    return resultado
}

console.log(soma(2, 3))
console.log(soma())

function nomeIdade(nome, idade){
    return `Meu nome é: ${nome}, minha idade é: ${idade}`
}

console.log(nomeIdade('Ramon', 33))

function multiplicacao(numero1=0, numero2=0){
    return numero1 * numero2
}

console.log(multiplicacao(soma(2, 3), soma(4, 5)))