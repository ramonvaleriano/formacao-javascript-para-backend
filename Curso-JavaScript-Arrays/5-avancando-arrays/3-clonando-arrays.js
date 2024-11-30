/**
 * Como clonar arrays, criando copias
 */


// Dados para serem usadas.
const notas = [7, 7, 8, 9];
console.log(`Notas: ${notas}`)

/*Formas de se copiar arrays*/
// 1° forma
const novasNotas1 = [...notas]
console.log(`novasNotas1: ${novasNotas1}`)

// 2° froma
const novasNotas2 = notas.slice()
console.log(`novasNotas2: ${novasNotas2}`)

// 3° forma
const novasNotas3 = Array.from(notas)
console.log(`novasNotas3: ${novasNotas3}`)

// 4° Forma 
const novasNotas4 = notas.concat()
console.log(`novasNotas4: ${novasNotas4}`)
