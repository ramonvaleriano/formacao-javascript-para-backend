/**
 * Funções
 */

/*Os três tipos de funções*/
// Declara função para depois a chamar
function somaDoisNumeros(numero1, numero2){
    result = numero1 + numero2

    return result
}
// Expressão de função
const multiplicaDoisNumeros = function (numer1, numero2){
    result = numer1 * numero2

    return result
}

// Arrow Funcition
const somaDaSoma = (numer1, numero2) => {
    result = numer1 + numero2

    return result
}

// Testando as funções
console.log(somaDoisNumeros(1, 2))
console.log(multiplicaDoisNumeros(1, 2))
console.log(somaDaSoma(2, 3))