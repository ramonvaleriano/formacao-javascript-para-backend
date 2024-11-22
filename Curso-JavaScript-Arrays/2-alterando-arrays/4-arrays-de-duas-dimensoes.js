/**
 * Array de Duas dimensões
 */

// Arrays que iremos trabalhar
const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

// Tornando array de duas dimensões
const lista = [alunos, medias];

// 1° Forme de acessar elas.
for (i = 0; i < lista[0].length; i++) {
  console.log(`Aluno: ${lista[0][i]} -> Nota: ${lista[1][i]}`);
}
