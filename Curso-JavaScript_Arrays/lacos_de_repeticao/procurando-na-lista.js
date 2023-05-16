// Listas para trabalhar.
const alunos = ["Ramon", "Milla", "Gael", "Dante", "Rayan", "Caio"];
const medias = [6, 10, 10, 9, 7, 5.4];

const listaAlunosMedias = [alunos, medias];

// Função para validação de dado.
function exibirNomeENota(nome, lista){
    if (lista[0].include(nome)){
        console.log(`\n${nome} já se encontra cadastrado na lista.`)
    }
    else{
        console.log(`\nAluno não encontrado.`)
    }
}

