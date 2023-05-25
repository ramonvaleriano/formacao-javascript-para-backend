// Atualizando dados com splice

alunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log('Lista inicial dos alunos: ')
console.log(alunos)

// Para se deletar um elemento. Passando o indice do elemento e quantas vezes queremos o deletar.

alunos.splice(1, 1)

console.log('Lista após ter deletado o elemento do indice 1, uma unica vez:')
console.log(alunos)

// Deletando o elemento do indice 2, 2 vezes.

alunos.splice(2, 2)

console.log('Lista após ter deletado o elemento do indice 2, duas vezes: ')
console.log(alunos)

// Adicionando um novo nome na lista de dados.

alunos.push("Ramon")

console.log(`Lista após ter adicionado um novo elemento: `)
console.log(alunos)

// Retirando um elemento e adicionando um no lugar.

alunos.splice(2, 1, "Milla")

console.log(`Lista após ter retirando o elemento de indice 2, uma única vez e adicionando um novo elemento: `)
console.log(alunos)