var input = require('fs').readFileSync('./1065 - Pares entre cinco numeros/stdin', 'utf8');
var lines = input.split('\n');
/* Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos. */
const n1 = lines[0];
const n2 = lines[1];
const n3 = lines[2];
const n4 = lines[3];
const n5 = lines[4];
let i = 0;
if (n1 % 2 ===0 ){
    i++;
}
if (n2 % 2 ===0 ){
    i++;
}
if (n3 % 2 ===0 ){
    i++;
}
if (n4 % 2 ===0 ){
    i++;
}
if (n5 % 2 ===0 ){
    i++;
}

console.log(i + ' valores pares');