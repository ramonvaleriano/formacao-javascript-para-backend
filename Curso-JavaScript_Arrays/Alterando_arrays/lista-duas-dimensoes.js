// Como se manipular listas com mais de uma dimensão.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const media = [10, 8, 7.5, 9];

// Criando ums lista com duas listas, a partir das duas anteriores.

const listaAlunosMedias = [alunos, media];

console.log(`Junção das duas lista: ${listaAlunosMedias}`);

// Acessando os dados de forma individual.
console.log("Acessando os dados de forma individual: ");
console.log(`${listaAlunosMedias[0][0]}`);
