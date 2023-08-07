var input = require('fs').readFileSync('./1042 - Sort Simples/stdin', 'utf8');
var lines = input.split('\n');
/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente,
 uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado. */
let numeros = input.split(' ');
let ordenar = [];

for (let n in numeros) {
    ordenar.push(numeros[n]);
}
ordenar = ordenar.sort(function(a,b){return a - b});
for (let y in ordenar) {
    console.log(parseInt(ordenar[y]));
}
console.log();
for (let z in numeros) {
    console.log(parseInt(numeros [z]));
}