function classificarNumero(numero) {
  if (numero % 2 == 0 && numero > 0) {
    console.log("Positivo e Par");
  } else if (numero % 2 != 0 && numero > 0) {
    console.log("Positivo e Ímpar");
  } else if (numero < 0) {
    console.log("Negativo");
  } else {
    console.log("Neutro");
  }
}

classificarNumero(6);
classificarNumero(-3);
classificarNumero(5);
classificarNumero(0);
