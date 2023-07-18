/*Estudando escopo das funções*/

let y = 10;

function imprimir(){
    let y = 100;
    console.log(y)
}

imprimir()
console.log(y)