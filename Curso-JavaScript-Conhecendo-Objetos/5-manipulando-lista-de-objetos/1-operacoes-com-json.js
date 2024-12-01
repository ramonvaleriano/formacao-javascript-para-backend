/**
 * Operações com json
 */

const estudantes = require("../arquivos-alura/estudantes.json");

function buscandoInformacao(listaDeDados, chave, valor) {
    const dadoFiltrado = listaDeDados.find((estudante) => {
        return estudante[chave] === valor;
    });

    return dadoFiltrado;
}

console.log(buscandoInformacao(estudantes, "nome", "Amye"))
