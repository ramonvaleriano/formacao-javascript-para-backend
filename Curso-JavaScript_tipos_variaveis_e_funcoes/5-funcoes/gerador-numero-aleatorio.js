/**
 * Arquivo: geardor-numeros-aleatoriso.js
 * Autor: Ramon Valeriano
 * Descrição: Gerador de números aleatórios.
 * Data: 18/01/2024
 */

// Função para retornar um número aleatório.

const numeroAleatorio = () => {
  let numero = Math.random();
  numero *= 100;
  numero = parseInt(numero);
  return numero;
};
