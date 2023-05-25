/*Aprendendo a usar o MAP*/

// Uma forma simples de usar o map no lugar do forEach.
const notas = [6, 9.3, 10, 6.8, 7.6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1
});
console.log(notasAtualizadas);
