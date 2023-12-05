/**
 * Operadores: Operadores Ternários
 */

// Operador Ternário

const idadeMinima = 18;
let idadeCliente = 16;

// Função para verificar se o cliente tem idade mininma para injerir bebendo alcoolica

function validaIdade(idadeMinima, idade) {
  console.log(
    `Validando dados:\nIdade Minima: ${idadeMinima}\nIdade do Cliente: ${idade}`
  );
  const idadevalidade = idade >= idadeMinima ? true : false;
  return idadevalidade;
}

function mensageria(result) {
  if (result) {
    console.log("O cliente pode Ingerir bebeidas Alcoolicas.");
  } else {
    console.log("O cliente não pode Ingegir bebidas Alcoolicas.");
  }
}

// Validade informações.

let testValidacao = validaIdade(idadeMinima, idadeCliente);

console.log(`O cliente pode ingerir bebida alcoolica? ${testValidacao}`);

idadeCliente = 34;
testValidacao = validaIdade(idadeMinima, idadeCliente);
mensageria(testValidacao);

idadeCliente = 15;
testValidacao = validaIdade(idadeMinima, idadeCliente);
mensageria(testValidacao);