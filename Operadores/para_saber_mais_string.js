const nome = 'Ramon';
const idade = 2023 - 1989;
const bebidaMaior = 'Cerveja';
const bebidaMenor = 'Suquinho';

let logica = idade >= 18 ? bebidaMaior : bebidaMenor

let pedido = `${nome} tem ${idade} anos e irá tomar ${logica}`

console.log(pedido)