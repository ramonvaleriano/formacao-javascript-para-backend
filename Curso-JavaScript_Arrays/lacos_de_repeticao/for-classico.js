/*Estrutarando o uso do mais básico do for.*/

// Lista com dados para estudo.
const numeros = [100, 200, 300, 400, 500, 600];

// Usando o for, ou laço controlado.

for (let indice = 0; indice < numeros.length; indice += 1) {
  console.log(numeros[indice]);
}

/*
    Como usar o for:

    for(1° expressão; 2° expressão; 3° expressão)

    1° Expressão: É executada apenas uma única vez, e inicializa o for.
    2° Expressão: É a condição para a execução do loop.
    3° Expressão: É executada sempre no final do loop, do laço que se encontro
                  incremetando os dados ou decrementando.
*/
