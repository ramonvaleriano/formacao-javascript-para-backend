/**
 * Operações com json
 */

const estudantes = require("../arquivos-alura/estudantes.json");

function buscandoInformacao(listaDeDados, chave, valor) {
    const dadoFiltrado = listaDeDados.find((estudante) => {
        return estudante[chave].includes(valor);
    });

    return dadoFiltrado;
}

console.log(buscandoInformacao(estudantes, "nome", "Amye"))
console.log(buscandoInformacao(estudantes, "telefone", "9045673092"))
