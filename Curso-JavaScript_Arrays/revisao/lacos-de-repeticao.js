/*Laços de repetição*/

/*Procurando dados na lista e informativo da onde o indice dela está.*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// Criando uma função para validar se existe um aluno cadastrado e sua média.

function procuraALuno(listaAlunosMedia, nomeAluno) {
  if (listaAlunosMedia[0].includes(nomeAluno)) {
    indice = listaAlunosMedia[0].indexOf(nomeAluno);

    let media = listaAlunosMedia[1][indice];

    console.log(
      `O Aluno: ${listaAlunosMedia[0][indice]} tem a média: ${media}`
    );
  } else {
    console.log(`O aluno: ${nomeAluno} não foi encontrado.`);
  }
}

console.log("Encontrando nome do aluno e média dele: ");
procuraALuno(listaDeAlunosEMedias, "João");
procuraALuno(listaDeAlunosEMedias, "Ramon");

// Usando a mesma função, porém desmembrada.

function procurandoAlunoDesmembrada(listaAlunosMedia, nome){
    const [listaAlunos, listaMedias] = listaAlunosMedia

    if (listaAlunos.includes(nome)){
        let indice = listaAlunos.indexOf(nome)
        let media = listaMedias[indice]

        console.log(
            `O Aluno: ${listaAlunos[indice]} tem a média: ${media}`
          );

    }
    else{
        console.log(`O aluno: ${nome} não foi encontrado.`);
    }
}

console.log("\nEncontrando nome do aluno e média dele: ");
procurandoAlunoDesmembrada(listaDeAlunosEMedias, "João");
procurandoAlunoDesmembrada(listaDeAlunosEMedias, "Ramon");

// Testando retorno do destrutura como retorno de uma função.
function testeDeRetorno(){
    const num1 = 1
    const num2 = 2

    return [num1, num2]
}

const [numero1, numero2] = testeDeRetorno()
console.log('\n\nTestando retorno: ')
console.log(numero1)
console.log(numero2)