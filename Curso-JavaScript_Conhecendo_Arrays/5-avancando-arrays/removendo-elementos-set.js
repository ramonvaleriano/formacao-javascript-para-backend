/**
 * Avançando Arrays
 * Removendo elementos com Set
 */

// Criando função para retirar dados respetidos
const validaArray = (arrayDados) => {
  // Validando array
  if (!Array.isArray(arrayDados) || arrayDados.length <= 0) return false;
  return true;
};

function retirandoRepetidso(arrayDados) {
  if (!validaArray(arrayDados)) {
    console.log("Não foi possivel fazer o uso desse Array");
    return null;
  }

  const arrayLimpo = [...new Set(arrayDados)];

  return arrayLimpo;
}

function ordenarDados(arrayDados) {
  if (!validaArray(arrayDados)) {
    console.log("Não foi possivel fazer o uso desse array");
    return null;
  }

  const arrayOrdenado = [...arrayDados.sort()];

  return arrayOrdenado;
}

// Dados para testes.
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Testando dados.
const semRepetidos = retirandoRepetidso(nomes);
const ordenados = ordenarDados(semRepetidos);

console.log(`Array de dados: ${nomes}`);
console.log(`Array de Limpos: ${semRepetidos}`);
console.log(`Array de Ordenados: ${ordenados}`);
