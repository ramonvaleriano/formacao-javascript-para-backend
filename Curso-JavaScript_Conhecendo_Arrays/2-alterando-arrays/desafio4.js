/**
 * Alterando arrays.
 * 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante.
 * Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
 */

// Função para resolução da questão.
function uniaoDeCardapios(array1, array2){
  const array3 = array1.concat(array2)
  return array3
}

// Testando os dados.
const rangoPrincipal = ['Arroz', 'Feijão', 'Macarrão', 'Carne', 'Frango']
const ranguinho = ['Sorvete', 'Cocada', 'Leite Condensado']

const menu = uniaoDeCardapios(rangoPrincipal, ranguinho)
console.log(menu)