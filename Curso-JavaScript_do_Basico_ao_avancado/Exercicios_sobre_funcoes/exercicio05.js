/*
    Exercício 05:

    Escreva uma função que receba a idade de uma pessoa;

    Se ela tem mai de 18 anos, ela pode entar na alto escola.

    Se ela não tive 18 anos ela não pode entar.

    Imprima os dois casos.
*/

// Função para saber se pode ou não fazer auto escola

const responseAge = (age) => {
  if (age <= 0) {
    console.log("Você pirou foi?!");
  } else if (age >= 18) {
    console.log("Você pode faer auto-escola");
  } else {
    console.log("Você não pode fazer auto-escola");
  }
};

responseAge(19);
responseAge(16);
responseAge(0);
responseAge(-3);
