/*Mais sobre escopo*/

// Exixite um escopo próprio dentro de uma condicional.

let y = 10;
console.log(`A variável y quando iniciada ${y}`)

if (y>5){
    let y = 6
    console.log(`A variável y dentro da condicional: ${y}`)
}

console.log(`O valor de y após a condicional: ${y}`)