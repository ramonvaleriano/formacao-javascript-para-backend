/*Trabalhando com closured.*/

function armazenaSoma(x) {
  return (y) => x + y;
}

let soma1 = armazenaSoma(2);
console.log(`Testando variável ${soma1}`);
let soma1_2 = soma1(3);
console.log(soma1_2);

function lembraSoma(x) {
  return function (y) {
    return x + y;
  };
}

let soma1a = lembraSoma(3);
console.log(soma1a(5));

function meuContador(numero) {
  let cont = numero;
  let contando = function () {
    console.log(`O número do contador: ${cont}`);
    cont++;
  };
  return contando;
}

let test = meuContador(5);
meuContador();
meuContador();
