/*Usando o continue dentro da restutura de reptição.*/

// Usando continue dentro do while.
let number = 0;

while (number < 11) {
    if (number % 2 == 0){
        continue;
    }
  console.log(number);
  number += 1;
}

// Usando continue dentro do for.
for (let i = 0; i <= 10; i++){
    if (number % 2 == 0){
        continue;
    }
    console.log(number)
}
