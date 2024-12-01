/**
 * Métodos de objetos.
 */

// Objeto para ser estudado.
const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dona Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

// Métodos do objeto.
const listDeKeys = Object.keys(estudante); // Lista de keys
const listaDeValores = Object.values(estudante); // List de valores
const listaEntidades = Object.entries(estudante);

console.log(`Lista e Keys: ${listDeKeys}`);
console.log(`Lista de valores: ${listaDeValores}`);
console.log(`Lista de Entidades: ${listaEntidades}`);
console.log(listaEntidades);

console.log("Percorrendo usando usando entries e for...of");
for (const [key, value] of Object.entries(estudante)) {
  console.log(`${key}: ${value}`);
}

let keyASerProcurado = "cor";

if (!listDeKeys.includes(keyASerProcurado)) {
  console.log("Não existe esse própriedad!");
}
