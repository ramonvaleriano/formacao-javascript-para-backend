/*Estudando funcções com mais profundidade.*/

function multiplicandoTresNumeros(x, y, z){
    return x * y * z
}

let resultado = multiplicandoTresNumeros(1, 2, 3)

console.log(`Multiplicando três números: ${resultado}`)

function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh){
        console.log('Pode dirigir!')
    }
    else{
        console.log('Não pode dirigir')
    }
}

podeDirigir(18, true)

podeDirigir(18, false)

podeDirigir(44, 0)

podeDirigir(16, true)