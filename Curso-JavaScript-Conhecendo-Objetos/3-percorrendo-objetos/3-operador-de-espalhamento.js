/**
 * Operador de espalhamento.
 */

// Objeto para estudo.
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

function exibirTelefone(telefone1, telefone2) {
  console.log(`Teletone 1: ${telefone1}; Telefone 2: ${telefone2}`);
}

exibirTelefone(
  (telefone1 = estudante.telefones[0]),
  (telefone2 = estudante.telefones[1])
);
exibirTelefone(...estudante.telefones);

const dadosParaEnvio = {
  nome: estudante.nome,
  ...estudante.enderecos[0],
};

console.log(dadosParaEnvio);
