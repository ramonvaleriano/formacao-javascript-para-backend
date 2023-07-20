/*
    Copiando as propriedades de um objeto para outro.
*/

// Objetos.

let objetoA = {
  proprit1: "Test1",
  proprit2: "Test2",
};

let objetoB = {
  proprit3: "Test3",
};

// Copiando as propriedades.
console.log("Copiando as propriedades do ObjetoB para o ObjetoA");
console.log(`ObjetoA: ${objetoA}`);
console.log(objetoA);
console.log(`ObjetoB: ${objetoB}`);
console.log(objetoB);

Object.assign(objetoA, objetoB);
console.log(`ObjetoA: ${objetoA}`);
console.log(objetoA);
console.log(`ObjetoB: ${objetoB}`);
console.log(objetoB);
