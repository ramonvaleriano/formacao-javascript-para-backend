/**
 * Procurando na lista os dados desejados
 */

// Lista com dados usados
const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

// Tornando array de duas dimensões
const lista = [alunos, medias];

//Testando o funcionamento do indexof
let indiceTest = alunos.indexOf("Juliana");
console.log(`Testando indexof com nome existente: ${indiceTest}`);
indiceTest = alunos.indexOf("Ramon");
console.log(`Testando indexof com nome inexistente: ${indiceTest}`);
let indiceIncludes = alunos.includes("Juliana");
console.log(`Testando includes com nome existente: ${indiceIncludes}`);
indiceIncludes = alunos.includes("Ramon");
console.log(`Testando includes com nome inexistente: ${indiceIncludes}`);

// Criando função para procurar nota a partir de um dado passado como parÂmetro.
const encontraNota = (lista, nomeAluno) => {
  let nota = null;
  if (lista[0].includes(nomeAluno)) {
    let indexAluno = lista[0].indexOf(nomeAluno);

    nota = lista[1][indexAluno];
  }

  return nota;
};

// Testando função desejada
let nomeDoAluno = "Juliana";
let nota = encontraNota(lista, nomeDoAluno);

console.log("\n\n\n");
console.log(`O Aluno: ${nomeDoAluno}, tem a nota: ${nota}`);
nomeDoAluno = "Ramon";
nota = encontraNota(lista, nomeDoAluno);
console.log(`O Aluno: ${nomeDoAluno}, tem a nota: ${nota}`);
