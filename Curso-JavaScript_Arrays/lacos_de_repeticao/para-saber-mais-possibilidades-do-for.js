/*Testando outras possibilidades para o uso do for*/

// Fazer o loop de forma invertida.
const numeros = [100, 200, 300, 400, 500, 600]

for(i = numeros.length - 1; i >= 0; i --){
    console.log(numeros[i])
}

// Saltando a cada duas linhas.
console.log('\nPulando um valor:')
for(i = numeros.length - 1; i >= 0; i-=2 ){
    console.log(numeros[i])
}

// Saltando a cada duas linhas e exibindo um valor acima de 300.
console.log('\nPulando uma linha e sendo maior que 300: ')
for(i=numeros.length - 1; numeros[i] >= 300; i-=2){
    console.log(numeros[i])
}