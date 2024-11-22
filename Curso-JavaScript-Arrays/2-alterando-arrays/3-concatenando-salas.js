/**
 * Concatenando Salas, juntandos duas salas
 */

// Arrys para para duas salas.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salaJS2 = ["Evaldo", "Camis", "Mari"];
const salaPython2 = ["Ju", "Leo", "Raquel"];

console.log("*****************");
console.log(`SalaJS: ${salaJS}`);
console.log(`salaPython: ${salaPython}`);

// Como se juntas salas.
const superSala = [...salaJS, ...salaPython];
console.log(`Como junstas duas salas: ${superSala}`);

// Sala Concatenada.
salaPython.concat(salaJS);
console.log(`Duas salas concatenadas com .concat: ${superSala}`);

// Jutando salas com push.
salaPython2.push(...salaJS);
console.log(`Duas salas concatenadas com .push: ${superSala}`);
