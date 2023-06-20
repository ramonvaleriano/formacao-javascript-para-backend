/*
    A função Math.pow() exibe a potencia de um número;

    Testa a função com console.log() e as seguintes bases: 2, 3, 18 e o expoente deve ser 2;

    Recebe 2 argumentos, base e expoente;

    Ex: Math.pow(5, 2)
*/

function elevacaoBaseExpoente(base, expoente) {
  return Math.pow(base, expoente);
}

const exibicaoDados = (resultado, base, expoente) => {
  console.log(
    `O resultado elevação --> Base: ${base}; Expoente: ${expoente} = Resultado: ${resultado}`
  );
};

let base = 0,
  expoente = 0;

base = 3;
expoente = 2;

let result = elevacaoBaseExpoente(base, expoente);

exibicaoDados(result, base, expoente);

base = 2
result = elevacaoBaseExpoente(base, expoente);

exibicaoDados(result, base, expoente);


base = 18
result = elevacaoBaseExpoente(base, expoente);

exibicaoDados(result, base, expoente);




