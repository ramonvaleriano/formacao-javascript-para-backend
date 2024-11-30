/**
 * Trabalhando com objetos dentro de objetos.
 */

// Objetos para se trabalhar.
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
  }

// código omitido

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }
  
console.log(estudante);

console.log(estudante.endereco)