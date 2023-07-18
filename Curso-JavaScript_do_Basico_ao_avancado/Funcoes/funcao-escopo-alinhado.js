/*Estudando escopos alinhados*/

let a = 10;
console.log(`A variável "a" quando é inicializada: ${a}`)

function escopoAlinhado(){
    let a = 99;
    console.log(`A variável "a" estanciada dentro da função: ${a}`)

    if (a > 5){
        let a = 66;
        console.log(`A variável "a" dentro da condicional: ${a}`)
    }

    console.log(`A variável "a" após a condicional: ${a}`)
}

escopoAlinhado()

console.log(`A variável "a" após todo o trajeto do código: ${a}`)