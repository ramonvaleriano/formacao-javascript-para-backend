/*
    Deletando objetos.
*/

// Objeto carro.
console.log("Como está o objeto antes de deletar quaqlquer coisa.");

let carro = {
  marca: "VW",
  portas: 4,
  eletrico: false,
  motor: "1.0",
};

console.log(carro);

// Deletando.
let aSerDeletado = "portas";

console.log(`Deletando: ${aSerDeletado}`);

delete carro[aSerDeletado];

console.log(carro);

// Adicionando dados.

carro["quitado"] = true;
carro.economico = false;

console.log(carro);
