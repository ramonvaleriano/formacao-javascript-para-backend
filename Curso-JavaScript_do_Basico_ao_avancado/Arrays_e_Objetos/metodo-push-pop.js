/*
    Aprendnedo a usar os metodos push e pop.
*/

// Lista ou Array.
let pessoas = ["Mathes", "Ramon", "Milla"];

// Todas as pessoas no array.
console.log("Todas as pessoas no array: ");
console.log(pessoas);

// Deletando o último elemento e atribuindo a uma variável.
let pessoaRemovida = pessoas.pop();
console.log("Como ficou o Array: ");
console.log(pessoas);
console.log(`Dado excluído: ${pessoaRemovida}`);

// Adicionando um novo elemento.
pessoas.push('Valeriano')
console.log("Como ficou o Array: ");
console.log(pessoas);
