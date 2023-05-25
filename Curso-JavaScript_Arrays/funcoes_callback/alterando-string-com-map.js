/*Mudando um string com map*/

// Dados para serm alterados.
const nomes = ["ana Julia", "Caio vinicius", "Bia silvia"];

const nomesPadronizados = nomes.map((nome) => {
  return nome.toUpperCase();
});

console.log(nomesPadronizados);
