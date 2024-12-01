/**
 * Lista de objetos.
 */

// Objeto principal para se trabalhar
const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  endereco: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
  ],
};

console.log(estudante);

// adicionando mais um dado a lista de endereços
estudante.endereco.push({
  rua: "Rua Dona Clotilde",
  numero: "71",
  complemento: "",
});

console.log(estudante);

// Filtrando dados que o complemento não seja vazio.
const enderecoComComplmento = estudante.endereco.filter((endereco) => {
    if (endereco.complemento){
        return true
    }
})

console.log(`Filtro de endereços com complemento: `)
console.log(enderecoComComplmento)