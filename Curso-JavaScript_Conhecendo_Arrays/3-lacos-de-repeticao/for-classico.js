/**
 * Laços de Repetição
 * For Classico
 */

// Função para exibir os elementos com for.
const exibirNotas = (arrayNotas) => {
  if (!(Array.isArray(arrayNotas) || arrayNotas.length <= 0)) return null;
  for (let i = 0; i < arrayNotas.length; i += 1) {
    console.log(`Aluno: ${i + 1} - Nota: ${arrayNotas[i]}`);
  }
};

const exibindoNotas = (arrayNotas) => {
  if (!(Array.isArray(arrayNotas) || arrayNotas.length <= 0)) return null;
  let incremento = 1;
  for (let nota of arrayNotas) {
    console.log(`Aluno: ${incremento} - Nota: ${nota}`);
    incremento += 1;
  }
};

const exibindoForEach = (arrayNotas) => {
  if (!(Array.isArray(arrayNotas) || arrayNotas.length <= 0)) return null;
  let incremento = 1;
  arrayNotas.forEach((nota) => {
    console.log(`Aluno: ${incremento} -- ${nota}`);
    incremento += 1;
  });
};

// Dados para serem usados.
const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// Testando dados.
exibirNotas(notas);
console.log("For in of");
exibindoNotas(notas);
console.log("ForEach");
exibindoForEach(notas);
