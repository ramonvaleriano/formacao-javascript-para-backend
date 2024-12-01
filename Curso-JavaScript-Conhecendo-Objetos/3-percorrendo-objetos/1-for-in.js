/**
 * Usando for..in para percorrer objetos
 */

// Objeto a ser estudado.
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
      }]
  }

// Usando for...in para preenche percorrer o objeto.
for (indice in estudante){
    console.log(`${indice}: ${estudante[indice]}`)
}