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