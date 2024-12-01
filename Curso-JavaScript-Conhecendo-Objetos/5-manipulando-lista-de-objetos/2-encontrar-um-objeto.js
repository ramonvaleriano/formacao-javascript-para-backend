/**
 * Encontrar um objeto
 */

const estudantes = require("../arquivos-alura/estudantes.json");

function filtrarPorPropriedade(lista, propriedade) {
  const estudantesFiltrados = lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);
  });

  return estudantesFiltrados;
}

console.log(filtrarPorPropriedade(estudantes, "complemento"))