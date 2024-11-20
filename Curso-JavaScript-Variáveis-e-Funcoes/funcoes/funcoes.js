/**
 * Funções para uso generalizado
 */

// Funções para exbição de dados
function exibirMensagem(mensagem) {
  console.log(mensagem);
}

// Validadores para false
function validadorFalse(variavel) {
  if (
    typeof variavel == null ||
    typeof variavel == undefined ||
    variavel == 0 ||
    variavel == "" ||
    variavel == " "
  ) {
    return false;
  }

  return true;
}

// validadores para true
function validadorTrue(variavel) {
  if (
    typeof variavel != null &&
    typeof variavel != undefined &&
    variavel != 0 &&
    variavel != "" &&
    variavel != " "
  ) {
    return true;
  }

  return false;
}

module.exports = { exibirMensagem, validadorFalse, validadorTrue };
