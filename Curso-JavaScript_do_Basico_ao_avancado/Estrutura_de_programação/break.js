/*Usando o break*/

// Usando o break no while.

let number = 0;

while (number <= 10){
    if (number == 5){
        console.log('Temos o número 5.')
    }
    console.log(number)
    number += 1;
}

// Usando break no for.
for (let i = 0;;i+=1){
    if (i % 10 ==0){
        console.log('Temos o número 10.')
        break
    }
    console.log(i)
}