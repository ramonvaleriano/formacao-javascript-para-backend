// Para saber mais sobre funcções matemáticas.

function imprimir_mensagem(texto){
    console.log(texto)
}

// Arredondamento.
imprimir_mensagem(Math.round(4.3))
imprimir_mensagem(Math.round(4.5))
imprimir_mensagem(Math.round(3.8))

// Arredondamento para o número mais alto, sempre.
imprimir_mensagem(Math.ceil(4.3))
imprimir_mensagem(Math.ceil(4.8))
imprimir_mensagem(Math.ceil(9.3))

// Arredondamento para o número mais baixo, sempre.
imprimir_mensagem(Math.floor(3.2))
imprimir_mensagem(Math.floor(3.8))
imprimir_mensagem(Math.floor(9.9))

// Retorna apenas o valor sem as casas decimais, sem qualquer tipo de arredondamento.
imprimir_mensagem(Math.trunc(4.8))
imprimir_mensagem(Math.trunc(4.9))
imprimir_mensagem(Math.trunc(4.1))

// Um número elevado por outro número.
imprimir_mensagem(Math.pow(4, 2))
imprimir_mensagem(Math.pow(4, 3))
imprimir_mensagem(Math.pow(3, 2))

// Raiz quadrada de um número.
imprimir_mensagem(Math.sqrt(64))
imprimir_mensagem(Math.sqrt(16))
imprimir_mensagem(Math.sqrt(9))

// Retornar o menor número de um array.
imprimir_mensagem(Math.min(3, 6, 34, 123, 89, 34, 1))

// Retornar o maior núnmero de um array.
imprimir_mensagem(Math.max(5, 99, 23, 123, 89))

// Retornar um  número randominco entre 0 e 1.
imprimir_mensagem(Math.random())