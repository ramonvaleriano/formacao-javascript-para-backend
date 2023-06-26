/*Estudando recursividade.*/

function retornaNumeroPar(numero) {
  if (numero % 2 == 0) {
    console.log(`Esse número agora é par: ${numero}`);
  } else {
    console.log(`Vamos o tornar par: ${numero}`);
    retornaNumeroPar(numero - 1);
  }
}

// Testando via dados.
retornaNumeroPar(12);
retornaNumeroPar(31);

function recursao(numero) {
  if (numero - 2 <= 0) {
    console.log("A recursão Parou!");
  } else if (numero % 2 != 0) {
    console.log("É um número impar!");
    recursao(numero - 1);
  } else {
    console.log("É um número par!");
  }
}


recursao(2)
recursao(9)
recursao(4)
recursao(1)