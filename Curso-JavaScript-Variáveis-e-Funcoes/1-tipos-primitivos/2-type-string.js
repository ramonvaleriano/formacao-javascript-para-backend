/**
 * Tipos String
 */

// Funções mensagem
function exibirMensagem(mensagem) {
    console.log(mensagem)
}

concatenandoDuasMensagens = (mensagem1, mensagem2) => {
    let mensgemTotal = mensagem1 + ' ' + mensagem2

    return mensgemTotal
}

// Exibindo Funções
const meuNomeCompleto = concatenandoDuasMensagens('Ramon', 'Valeriano')
exibirMensagem(meuNomeCompleto)