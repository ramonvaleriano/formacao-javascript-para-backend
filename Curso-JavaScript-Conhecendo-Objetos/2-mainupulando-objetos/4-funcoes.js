/**
 * Funções com objetos
 */

const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  media: 7.5,
  alunoAprovado: function () {
    return this.media >= 7 ? true : false;
  },
};

console.log(estudante.alunoAprovado());
