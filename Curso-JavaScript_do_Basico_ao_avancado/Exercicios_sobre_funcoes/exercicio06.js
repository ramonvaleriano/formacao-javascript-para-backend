/*
    Exercício 06:

    Escreva uma função que detecta o tipo de dado passado;

    Verifique se é um: booleano, string ou number;

    E retorne uma mensagem para cada tipo;

    Execute uma função para cada tipo.
*/

// Função para number.
const numberType = (data) => {
  console.log(`O dado ${data} é um Number`);
};

// Função para string.
const stringType = function (data) {
  console.log(`O dado ${data} é uma string`);
};

// Funçao para boolean.
const booleanType = (data) => console.log(`O dado ${data} é um boolean`);

// Função para não há tipo.
function nullType(data) {
  console.log(`O dado ${data} não tem tipo.`);
}

// A função que detecta qual o tipo de dados de entrada.
function detectaTipo(dado) {
  if (typeof dado == "number") {
    // Se o tipo for number
    numberType(dado);
  } else if (typeof dado == "string") {
    // Se o tipo for string
    stringType(dado);
  } else if (typeof dado == "boolean") {
    // Se o tipo for boolean
    booleanType(dado);
  } else {
    // Caso não for definido o tipo
    nullType(dado);
  }
}

detectaTipo(1);
detectaTipo("Ramon");
detectaTipo(true);
detectaTipo(null);
