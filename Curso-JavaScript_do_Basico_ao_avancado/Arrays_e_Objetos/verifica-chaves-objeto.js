/*
    Verificando chaves de um projeto.
*/

// Objeto.
console.log("Validando os objetos: ");
let objetoA = {
  proprit1: "Test1",
  proprit2: "Test2",
};

let objetoB = {
  proprit3: "Test3",
};
console.log(`ObjetoA: ${objetoA}`);
console.log(objetoA);
console.log(`ObjetoB: ${objetoB}`);
console.log(objetoB);

// Validando as chaves do objeto.
let chaves = Object.keys(objetoA);
console.log("Validando as chaves: ");
console.log(chaves);

// Validando valores do objeto.
let valores = Object.values(objetoA);
console.log("Validando os valores: ");
console.log(valores);
