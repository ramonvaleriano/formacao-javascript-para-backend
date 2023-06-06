/*Acessando dados de um Objeto*/

// Como acessar um objeto.

const cliente = {
    nome: 'Ramon',
    idade: 33,
    cpf: "122333444455555",
    email: 'ramonramon@email.com'
}

console.log('Testando como acessar os dados de um objeto: ')
console.log(`Nome: ${cliente["nome"]}`)
console.log(`Idade: ${cliente.idade}`)

// Como acessar uma substring.

console.log(`Os três primeiros número do cpf: ${cliente.cpf.substring(0, 3)}`)