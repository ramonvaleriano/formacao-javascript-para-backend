/*Estudando recursividade.*/

function retornaNumeroPar(numero){
    if(numero % 2 ==0){
        console.log(`Esse número agora é par: ${numero}`)
    }
    else{
        console.log(`Vamos o tornar par: ${numero}`)
        retornaNumeroPar(numero - 1)
    }
}

// Testando via dados.
retornaNumeroPar(12)
retornaNumeroPar(31)