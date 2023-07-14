/*
    Exercício 10:

    Escreva uma função que recebe um número, e o decrementa de 1 com 1 com um loop;

    Além disso, deverá mostar apenas os número pares.
*/

// Função que irá validar os números pares:
function validaNumeroPar(number){
    if(number % 2 ==0){
        return true
    }
    return false
}

// Função para decremento de 1 com 1;
const contagemRegrssiva = (number) => {
    for (let i = number; i >= 0; i--){
        if (validaNumeroPar(i)){
            console.log(i)
        }
    }
}

// Testes
contagemRegrssiva(10)