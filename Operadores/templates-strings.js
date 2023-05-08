// Concatenação de Strings.

let nome = 'Ramon'
let idade = 2023 - 1989
let cidade = 'Juazeiro'
let estado = 'Bahia'
let apresentacao = 'Meu nome é: ' + nome + ', Idade: ' + idade + ', Nascido em: ' + cidade + ', ' + estado

console.log('Usando Concatenção comum: ')
console.log(apresentacao) 

// Templetas strings.

apresentacao = `Meu nome é: ${nome}. Com idade: ${idade}. Nascido em: ${cidade}, ${estado}`
console.log(apresentacao)