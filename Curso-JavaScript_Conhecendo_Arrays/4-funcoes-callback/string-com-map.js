/**
 * Funções Callbacks
 * String com Map()
 */

// Função para aprendizado.
const validaArray = (arrayDados) => {
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) {
    console.log("ERROR - Dado não pode ser usados!");
    return false;
  }

  console.log("Tipo de dado validado.");
  return true;
};

function nomesMaiusculos(arrayNomes) {
  if (!validaArray(arrayNomes)) {
    console.log("Não foi possível atualizar os nomes!");
    return null;
  }

  const nomesMaiusculos = arrayNomes.map((nome) => {
    let nomeMaiusculo = nome.toUpperCase();
    return nomeMaiusculo;
  });

  return nomesMaiusculos;
}

// Dados para serem usados.
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Testando os dados.
console.log(`Os nome antes de atualização: ${nomes}`);
const nomesAtualizados = nomesMaiusculos(nomes);
console.log(`Os Nomes atualizados: ${nomesAtualizados}`);
