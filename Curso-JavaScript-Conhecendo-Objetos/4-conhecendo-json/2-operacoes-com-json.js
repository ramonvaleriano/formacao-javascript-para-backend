/**
 * Operações com Json.
 */

// Importando dados
const estudante = require("./estudante.json")

const stringJson = JSON.stringify(estudante)

console.log(stringJson)
console.log(typeof stringJson)

const objectEstudante = JSON.parse(stringJson)

console.log(objectEstudante)
console.log(typeof objectEstudante)