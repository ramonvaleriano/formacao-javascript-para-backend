/*Praticando o conhecimento de Funções*/

function exibeMensagemSaldacao() {
  console.log("Estudando funções!");
}

function exibeUmParametro(dado) {
  console.log(`O dado enviado: ${dado}`);
}

function loopDeNumeros(inicio, fim) {
  exibeMensagemSaldacao();
  for (let i = inicio; i <= fim; i++) {
    exibeUmParametro(i);
  }
}

loopDeNumeros(1, 10);
