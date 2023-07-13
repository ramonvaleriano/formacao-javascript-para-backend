/*
    Exercício 04:

    Criar uma função que retorne um númeor aleatório;

    O número máximo deve ser retornado via parâmetro;

    Dica: Usa a função Math.random().
*/

function numeroAleatorio(numero){
  const numeroAle = parseInt(Math.random() * numero)
  return numeroAle
}

let numeroSorteado = numeroAleatorio(10)
console.log(`O número desejado: ${numeroSorteado}`)