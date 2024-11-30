/**
 * Exibindo dados do objeto por colchetes.
 */

// Objeto
const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};
console.log(estudante)

// Criando funçaõ para coletar dados especificos
function coletaDadoDeObjeto(objetoComDados, nomeDoFiltro){
    let dado = objetoComDados[nomeDoFiltro]

    return dado
}

let testColeta = coletaDadoDeObjeto(estudante, "nome")
console.log(testColeta)
