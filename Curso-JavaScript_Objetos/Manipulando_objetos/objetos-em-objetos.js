/*Objeto dentro de outro objeto.*/

// Dados para estudo.
const cliente = {
    nome: "Ramon",
    idade: "33",
    email: "ramonramon@valeriano.com",
    telefone: ["71 9 9277-4903", "71 9 1234-1234"]
  };


// Adicionando um objeto dentro do objeto.
cliente.endereco = {
  rua: 'Aquela rua lá',
  numero: 'O que tiver escrito na porta',
  apartamento: true,
  complemento: "Ai você que saber demais"
}

console.log('Objeto dentro do objeto: ')
console.log(cliente)
