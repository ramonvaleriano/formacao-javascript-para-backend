/**
 * Usano map
 */

// Array usado para estudo
const notas = [10, 8.5, 5, 6.5, 8, 7.5];
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
console.log(`Array de dados: ${notas}`)
console.log(`Array de nomes: ${nomes}`)

// Usando Map
const notasAtualizadas = notas.map((nota) =>{
    let notaProvisoria = nota + 1
    if (notaProvisoria > 10){
        return nota
    }
    return notaProvisoria
})

console.log(`As notas atualizadas: ${notasAtualizadas}`)

const nomesPadronizados = nomes.map( (nome) => {
    return nome.toUpperCase()
})

console.log(`Os nomes Padronizados: ${nomesPadronizados}`)
