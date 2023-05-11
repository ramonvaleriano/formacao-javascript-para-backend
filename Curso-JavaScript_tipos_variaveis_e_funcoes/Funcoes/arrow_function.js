// Desclaração de uma função qualquer.

function apresentacao(nome){
    console.log(nome)
}

// Arrow function
// Arrow function para uma única linha
const arepsetacaoArrow = nome => `${nome}`;
const somaDoisNumeros = (numero1, numero2) => numero1 + numero2

// Arrow function com mais de uma linha.
const somaNumerosPequenos = (numero1, numero2) => {
    if ((numero1 > 10) || (numero2 > 10)){
        return "somente números de 0 a 10"
    }
    else {
        return numero1 + numero2
    }
}

console.log(somaNumerosPequenos(9, 1))