/*
    Mutação
*/

// Objetos.
let objetoA = {
  pontos: 10,
};

let objetoB = objetoA;

let objetoC = {
  pontos: 10,
};

// Testando essa mutação.
console.log(objetoA == objetoB);
console.log(objetoA == objetoC);

// Validando o que há dentro dos objetos.
console.log(objetoA);
console.log(objetoB);
console.log(objetoC);

// Modificando o objetoA para verifica o que ocorre.
objetoA.novoOrcamoento = 100;

console.log(objetoA);
console.log(objetoB);
console.log(objetoC);

// A verdadeir forma de se copiar um objeto é o clonando.

let objetoD = { ...objetoC };

objetoC.novoValor = 500;

console.log(objetoA);
console.log(objetoB);
console.log(objetoC);
console.log(objetoD);
