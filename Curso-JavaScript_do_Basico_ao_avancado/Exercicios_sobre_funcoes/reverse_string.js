/*
    Inverter string
    Escreva uma função chamada reverseString que recebe uma string como argumento.

    A função deve inverter a ordem dos caracteres na string.

    A função deve retornar a string invertida.
*/

function reverseString(stringInput){
    let reverse = ''
    for(let i = (stringInput.length - 1); i >= 0; i--){
        if (i == stringInput.length - 1){
            reverse = stringInput[i]
        }
        else{
            reverse += stringInput[i]
        }
    }

    return reverse
}

let name = 'Ramon'

let inverseName = reverseString(name)
console.log(inverseName)
