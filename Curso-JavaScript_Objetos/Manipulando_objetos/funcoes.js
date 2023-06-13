/*Funções*/

// Usando uma funçao no Obejeto.
console.log('Usando uma função no objeto: ')

const cliente = {
    nome: 'Ramon',
    idade: 33,
    email: 'meuemail@email.com',
    telefone: ['71992774903','122333444455555'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor == null){
            console.log(`O saldo é: ${this.saldo}`)
        }
        else if (valor > this.saldo){
            console.log('Saldo insuficiente!')
        }
        else{
            this.saldo -+ valor
            console.log(`Pagamento realizado. Seu novo saldo é: ${this.saldo}`)
        }
    }
}

console.log('Como está o dado de inicialmente: ')
console.log(cliente)

console.log('\nAdicionando pagamento: ')
cliente.efetuaPagamento(25)
console.log(cliente)

console.log('\nAdicionando pagamento: ')
cliente.efetuaPagamento(255)
console.log(cliente)

// Com uma função esterna para ver se o valor retorna, no lugar do nome da função.

function clienteEfeturaPagamento(saldo, valor=null){
    if (valor != null){
        if (valor > saldo){
            console.log('')
        }
    }
}