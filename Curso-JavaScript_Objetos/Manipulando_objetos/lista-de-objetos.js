/*Lista de Objetos.*/

// Dados a serem usados.
const cliente = {
    nome: 'Ramon',
    idade: 33,
    email: 'meuemail@email.com',
    telefone: ['71992774903', 122333444455555]
}

cliente.enderecos = [
    {
        rua: "Uma rua qualquer",
        numero: 99999,
        apartamento: true,
        complemento: "Sei la"   
    }
]

console.log('Lista de objetos:')
console.log(cliente)

// Adicionando mais objetos.
cliente.enderecos.push({
    rua: "Segunda rua qualquer.",
    numero: 6969,
    apartamento: false,
    complemento: 'Quando achar a casa é garantido entrar.'
})

console.log('Adicionando dados:')
console.log(cliente)

// FIltrando apenas os apartamentos.
const listaApartamento = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

console.log('Filtrando apenas os apartamentos: ')
console.log(listaApartamento)
