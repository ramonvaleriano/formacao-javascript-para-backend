/*Argumentos padrões para uma função.*/

// Caso não seja passada um determinado valor para uma função, ele terão um argumento pré-definido

function repetirFrase(nome, vezes = 2) {
  for (let i = 0; i < vezes; i++) {
    console.log(nome);
  }
}

repetirFrase("Estudando JavaScript", 8);
console.log('\n')
repetirFrase("Estudando JavaScript");
