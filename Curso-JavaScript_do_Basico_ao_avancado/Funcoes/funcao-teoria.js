/*Teoria do que é uma função.*/

function imprimindoNoConsole() {
  console.log(
    "Testando a impressão de dados, sem passagem alguma de parâmetros pela função."
  );
}

function imprimindoNoConsoleComParametro(mensagem) {
  console.log(mensagem);
}

const imprimindoPorVariavel = function () {
  console.log(
    "Imprimando informações por uma variável, sem passagem de parâmetros."
  );
};

const imprimindoPorVariavelComParametro = function (mensagem) {
  console.log(mensagem);
};

const arrowFuncitionMensagem = () =>
  console.log("Uma mensagem usando Arrow Funcition sem parametros.");

const arrowFuncitionMensagemComParametros = (mensagem) => {
  console.log(mensagem);
};

console.log("Passando todos os tipos de funções aqui.");
imprimindoNoConsole();
console.log("\n");
imprimindoNoConsoleComParametro(
  "Imprimindo de uma função comum e com parâmetro."
);
console.log("\n");
imprimindoPorVariavel();
console.log("\n");
imprimindoPorVariavelComParametro("Imprimindo com variável e com parêmtro");
console.log("\n");
arrowFuncitionMensagem();
console.log("\n");
arrowFuncitionMensagemComParametros(
  "Imprimindo com arrow funcition e com parâmetro."
);
