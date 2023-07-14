/*
    Exercício 09:

    Escreva uma função que receba dois números, o primeiro é a base e o seguindo a potência;

    Depois faça a operação e retorner o resultado.

    Por exemplo: 3, 2 = 9
*/

// Criando função para executar a potência.
function potenciacao(base, potencia){
    result = Math.pow(base, potencia)
    return result
}

console.log(potenciacao(2, 2))

console.log(potenciacao(2, 3))

console.log(potenciacao(3, 2))
