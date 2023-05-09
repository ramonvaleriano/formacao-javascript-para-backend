

//1° Declarando uma função.
function imprimir_mensagem(texto){
    console.log(texto)
}

//2° Executando a função.
imprimir_mensagem('Meu nome é:')
imprimir_mensagem('Ramon Valeriano')


// Funcão que não recebe parâmetros.
function soma(){
    const resultado = 2 + 2
    return resultado
}

console.log(soma()) 

// Passando uma função dentro de outra função.
imprimir_mensagem('\nVamos passar uma função dentro da outra -- >')
imprimir_mensagem(soma())