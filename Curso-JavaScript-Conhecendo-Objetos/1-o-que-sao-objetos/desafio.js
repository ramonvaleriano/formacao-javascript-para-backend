/**
 * Desafio 1°
 */

// 1° Questão:
const livro = {
  nome: "Códgio da Vince",
  auto: "Dan Brown",
  anoPublicacao: "2000",
  genero: "Romance",
};

console.log(livro);

// 2° Questão:
console.log("2° Questão");
const momentoAtual = new Date();
const anoAtual = momentoAtual.getFullYear();

const novoLivro = {
  nome: "Código da Vinci",
  autor: "Down Brawn",
  anoDePublicacao: 2000,
  genero: "Romance",
};

console.log(novoLivro);

function criandoDetalhes(objetoLivro, dataAtual) {
  const objetoDetalhes = new Object();

  const idadeDoLivreo = dataAtual - objetoLivro.anoDePublicacao;

  Object.assign(objetoDetalhes, {
    idadeDoLivreo: idadeDoLivreo,
    dataAtual: dataAtual,
  });

  return objetoDetalhes;
}

novoLivro["mostrarDetalhes"] = criandoDetalhes(novoLivro, anoAtual);

console.log(novoLivro);

// 3° Questão:
console.log("3° Questão");
Object.keys(novoLivro).forEach((pessoa, indice) => {
  console.log(`"${pessoa}": "${novoLivro[pessoa]}"`);
});

// 4° Questão:
console.log("4° Questão");

novoLivro.avaliacao = null
console.log(novoLivro)

novoLivro.avaliacao = 10
console.log(novoLivro)

// 5° Questão:
console.log("5° Questão");

console.log(novoLivro)

novoLivro.genero = "aventura"

console.log(novoLivro)

// 6° Questão:
console.log("6° Questão");
console.log(novoLivro)

delete novoLivro.avaliacao

console.log(novoLivro)