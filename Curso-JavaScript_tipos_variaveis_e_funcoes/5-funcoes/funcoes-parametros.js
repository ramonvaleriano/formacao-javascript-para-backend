/**
 * Funções: Funções com parâmetros
 */

// Funções com Parâmetros.

// Function experession.
const nameAge = function (name, age) {
  let mensage = "Não foi possivel acessar o nome e a idade!";
  if (name && age) {
    mensage = `O nome: ${name} e a idade: ${age}`;
    return mensage;
  }
  return mensage;
};

// Function declaration.
function nameComplete(name, lastName) {
  let nameComplete = "Não há dados para completar o nome!";
  if (name && lastName) {
    nameComplete = `O nome completo da pessoa é: ${name} ${lastName}`;
    return nameComplete;
  }
  return nameComplete;
}

const elevandoNumero = (base, expoente) => {
  let result = "Não há dados para realizar a operação!";
  if (base && expoente) {
    result = Math.pow(base, expoente);
    return result;
  }
  return result;
};

// Realizando testes.
let mensage = nameAge("Ramon", 34);
console.log(mensage);

mensage = nameComplete("Ramon", "Valeriano");
console.log(mensage);

mensage = elevandoNumero(2, 3);
console.log(mensage);

mensage = elevandoNumero(5, 2);
console.log(mensage);
