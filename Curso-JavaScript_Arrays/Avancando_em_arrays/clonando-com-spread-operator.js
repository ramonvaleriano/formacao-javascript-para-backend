/*Clonando com spread operator*/

// Lista para ser clonada, ou copiada.
const lista = [1, 7, 4, 6, 2, 1]

// Lista copiada.
const listaCopiada = [...lista]
listaCopiada.push(10, 2)

console.log(`Lista original: ${lista}`)
console.log(`Lista copiada e adicionada: ${listaCopiada}`)
