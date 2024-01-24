/***
 * Funções CallBacks
 * Map alterando String
 */

// Dados para serem usados.
const nomes = ['milla gabriela', 'ramon valeriano', 'BIA silva'];

// Função para ser usada com o callback interno para altetar uma string.
const nomePadronizado = (nomes) => {
    const nomePadronizado = nomes.map((nome) =>{
        return nome.toUpperCase();
    })

    return nomePadronizado;
}

// Testando os dados.
const novosDados = nomePadronizado(nomes);
console.log(novosDados);