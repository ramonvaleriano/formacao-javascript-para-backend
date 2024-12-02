/**
 * Filtrando e ordenando Objetos.
 */

const estudantes = require("../arquivos-alura/estudantes.json")

function ordena(lista, propriedade){
    const dadosOrdenados = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]){
            return -1
        }
        if(a[propriedade] > b[propriedade]){
            return 1
        }

        return 0
    })

    return dadosOrdenados
}

console.log(ordena(estudantes, "nome"))