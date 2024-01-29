/**
 * O que são arrays.
 * Desenvolva um programa em Node.js que simule uma clínica veterinária.
 * Crie um array vazio chamado clinica que representará a fila de animais na clínica.
 * Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
 * Após a exibição,remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
 */

// Criando função para essa questão.
function adicionarAnimais(arrayOriginal, arrayNovosAnimais){
  if(Array.isArray(arrayOriginal) && Array.isArray(arrayNovosAnimais)){
    if (arrayNovosAnimais.length > 0){
      arrayOriginal.push(...arrayNovosAnimais)
    }
  }
}

const atendimento = (arrayAnimais) => {
  if(Array.isArray(arrayAnimais) && arrayAnimais.length > 0){
    console.log(`Animal atendido: ${arrayAnimais[0]}`)
    arrayAnimais.shift()
  }
}

// Testando os dados.
const clinica = new Array();
console.log(`Fila de atendimento: ${clinica}`)
adicionarAnimais(clinica, ['Cachorro', 'Gato', 'Papagaio'])
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
console.log(`Fila de atendimento: ${clinica}`)
adicionarAnimais(clinica, ['gavião', 'baleia'])
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
console.log(`Fila de atendimento: ${clinica}`)
atendimento(clinica)
