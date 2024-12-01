/**
 * Desafios
 */

// Funções que podem ser usadas.
function mostrarInfoPessoa(objetoPessoa) {
  console.log(objetoPessoa);
}

const filtrarPorCidade = (listaPessoas, cidadeEscolhida) => {
    return listaPessoas.filter((pessoa) => {
      // Verifica se a cidade da pessoa corresponde à cidade escolhida
      return pessoa.cidade === cidadeEscolhida;
    });
  };

// Questão 01
const pessoa = {
  nome: "Ramon Valeriano",
  idade: 35,
  solteiro: false,
  hobbies: ["Academia", "Jiu-jitsu", "Ler"],
};

mostrarInfoPessoa(pessoa);

// Questão 02
let endereco = {
  rua: "Uma rua ai",
  cidade: "Uma Cidade ai",
  estado: "Um estado ai",
};

pessoa.endereco = endereco;
mostrarInfoPessoa(pessoa);

// Questão 03
console.log("Questão 03");
const pessoas = new Array();

pessoas.push(
  {
    nome: "um nome 1",
    idade: 32,
    ciade: "Uma cidade ai 1",
  },
  {
    nome: "um nome 2",
    idade: 34,
    ciade: "uma cidade 2",
  },
  {
    nome: "um nome 2",
    idade: 45,
    cidade: "Uma cidade 3",
  }
);

//console.log(pessoas)

mostrarInfoPessoa(pessoas);
console.log(filtrarPorCidade(pessoas,"Uma cidade 3"))