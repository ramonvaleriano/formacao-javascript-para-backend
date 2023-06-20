/*
    Verifique se o número é primo;

    Um númeor é primo, é um número natural, maior que 1, e apenas divisivel por sí próprio e por 1.
*/
let cont = 0;

for (let i = 1; i <= 100; i++) {
  cont = 0;

  for (let j = 1; j <= 100; j++) {
    if (i % j == 0) {
      cont += 1;
    }

    if (cont > 2) {
      break;
    }
  }
  if (cont == 2) {
    console.log(`O número: ${i} é primo.`);
  }
}