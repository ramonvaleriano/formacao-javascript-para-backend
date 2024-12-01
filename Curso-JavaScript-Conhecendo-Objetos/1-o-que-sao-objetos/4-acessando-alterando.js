/**
 * Acessando e alterando um objeto.
 */

// Objeto para estudo.
const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JavaScript",
  };
console.log(estudante)
// Criando um novo dado.
estudante["altura"] = 1.70
console.log(estudante)

// Usando asign
Object.assign(estudante, {profissao: 'Engenheiro', cidade: 'onde me pagar muito bem'})
console.log(estudante)

// Usando ...
const novoEstudante = {...estudante, peso: 96}    
console.log(novoEstudante)

// usando .
estudante.peso = 96

// Modificando com []
estudante["nome"] = "Milla Valeriano"
console.log(estudante)

// Modificando com .
estudante.peso = 80
console.log(estudante)