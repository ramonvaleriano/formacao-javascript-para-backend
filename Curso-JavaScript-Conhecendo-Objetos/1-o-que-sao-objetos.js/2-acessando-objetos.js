/**
 * Acessando um objeto.
 */

// Objeto para estudo.
const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};

// Logs.
console.log(`Objeto estudante: ${estudante}`);
console.log(estudante);

//Nome do estudante
let nomeEstudante = estudante.nome;
console.log(`Nome do estudante: ${nomeEstudante}`);

let turmaEstudante = estudante["turma"];
console.log(`Turma do estudante: ${turmaEstudante}`);

// Rodando todo o objeto com for...in
for (pessoa in estudante){
    console.log(`"${pessoa}": "${estudante[pessoa]}"`)
}

// Rodando com foreach
Object.keys(estudante).forEach((key) => {
    console.log(`"${key}": "${estudante[key]}"`)
})
