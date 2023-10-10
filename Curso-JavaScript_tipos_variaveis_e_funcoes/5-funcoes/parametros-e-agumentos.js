/**
 * Parametros e Argumentos.
 */

// Passando parâmetros na função.

const sumTwoNumbers = (numerOner, numberTwo) => {
  const result = numerOner + numberTwo;
  return result;
};

function printMensage(mensage) {
  console.log(mensage);
}

const nomeIdade = function(nome, idade0){
    const result = `O nome é: ${nome} e a idade é: ${idade0}`
    return result
}

printMensage(sumTwoNumbers(1, 3));
printMensage(nomeIdade('Ramon', 34))