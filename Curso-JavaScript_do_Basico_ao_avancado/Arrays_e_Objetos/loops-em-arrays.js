/*
    Loops em Arrays.
*/

// Lista ou Array.
let numeros = [1, 5, 10, 15, 20, 25];

// Loops de Arrays.
console.log("Usando o for convencional: ");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
console.log("Usando o forEach");
let new_numbers = numeros.forEach(function (numero) {
  console.log(numero);
});

// Usando o forEach de outra forma.
console.log("Usando forEach com arrow function:");
let numeros_novos = numeros.forEach((numero) => {
  console.log(numero);
});
