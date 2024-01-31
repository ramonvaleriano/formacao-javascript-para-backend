/**
 * Alterando arrays.
 * 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
 * const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
 * Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
 */

// Função para resolução da questão.
const removendoSubstituindo = function (
  indiceInicio,
  indiceFim,
  arrayInicial,
  arraySub
) {
  arrayInicial.splice(indiceInicio, indiceFim, ...arraySub);
  return arrayInicial;
};

// Testando dados.
const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];

console.log(`Array Inicial: ${frutas}`);
const novoArray = removendoSubstituindo(2, 2, frutas, ["kiwi", "Pêssego"]);
console.log(`Array Final: ${novoArray}`);
