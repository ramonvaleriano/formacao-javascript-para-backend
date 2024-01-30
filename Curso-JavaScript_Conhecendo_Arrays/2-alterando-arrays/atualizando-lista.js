/**
 * Alterando Arrays
 * Atualizando lista
 */

// Dados para o uso.
const listaEstudantes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Usando o splice para atualizar a lista de dados.
console.log(`Validando lista atual: ${listaEstudantes}`);
listaEstudantes.splice(1, 2);
console.log(`Dados atualizados: ${listaEstudantes}`);
listaEstudantes.splice(3, 1, "Ramon", "Milla");
console.log(`Dados atualizados: ${listaEstudantes}`);
