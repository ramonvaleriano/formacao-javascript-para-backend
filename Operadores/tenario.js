// Operadores Ternários.

const idadeMinima = 18;
const idadeCliente = 16;

// Usando o if normal.
console.log('Usando if e else:')
if (idadeCliente >= idadeMinima){
    console.log('Cerveja.')
}
else{
    console.log('Suco.')
}

// Usando o tenário.
console.log('Usando operadore tenário:')
//          condição                       Verdadeiro : Falso
console.log(idadeCliente >= idadeMinima ? 'Cerveja.': 'Suco.')