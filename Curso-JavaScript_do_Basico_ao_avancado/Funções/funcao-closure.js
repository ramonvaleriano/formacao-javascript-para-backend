/*Trabalhando com closured.*/

function armazenaSoma(x){
    return y => x + y;
}

let soma1 = armazenaSoma(2)
console.log(`Testando variável ${soma1}`)
let soma1_2 = soma1(3)
console.log(soma1_2)
let soma2 = soma1_2(3)
console.log(soma2)