/*Leitura de dados via terminal.*/

var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(
  "Dessa forma fazendoa  leitura de qualquer dado: ",
  function (dado) {
    console.log(`O dado escrito foi: ${dado}`);
    leitor.close();
  }
);
