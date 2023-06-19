/*
    Armazene a velocidade de um carro em uma variável, com o número que desejar;

    Faça uma estrutura if/else que verfica se ele está acima da velocidade;

    80 é a velocidade máxima permitida;
    
    Se estiver acima ou abaixo menagens com console.log().
*/

const medidorDeVelocidade = (velocidade) => {
    if (typeof velocidade == 'number'){
        if (velocidade == 80){
            console.log('Velocidade Permitida!')
        }
        else if(velocidade < 80 && velocidade > 0){
            console.log('Velocidade abaixo do permitido')
        }
        else if(velocidade == 0){
            console.log('Veiculo parado.')
        }
        else{
            console.log('Velocidade acima do permitido.')
        }
    }
    else{
        console.log('Fomato não validado.')
    }
}

let velocidade = 0

medidorDeVelocidade(velocidade)

velocidade = 80

medidorDeVelocidade(velocidade)

velocidade = 50

medidorDeVelocidade(velocidade)

velocidade = 100

medidorDeVelocidade(velocidade)

velocidade = 'Testa'

medidorDeVelocidade(velocidade)

