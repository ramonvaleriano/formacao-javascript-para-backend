// Função sem parâmetros

function cumprimentar(){
    console.log('OLá mundo')
}

cumprimentar()

// Funcção com parâmentros

function cumprimentarPessoa(pessoa){
    console.log(`Olá, ${pessoa}`)
}

cumprimentarPessoa('Ramon')

// Funções que usam outras funções

function cumprimentarApenas(){
    return 'Olá mundo!'
}

function cumprimetarPessoasApenas(pessoa){
    console.log(`${cumprimentarApenas()} Meu nome é: ${pessoa}`)
}

cumprimetarPessoasApenas('Ramon')

// Funções com Lógicas internas
function somaDeTresNumeros(numero1=0, numero2=0, numero3=0){
    return numero1 + numero2 + numero3
}

console.log(somaDeTresNumeros(1, 1, 1))