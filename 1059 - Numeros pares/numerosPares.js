var input = require('fs').readFileSync('./1059 - Numeros pares/stdin', 'utf8');
var lines = input.split('\n');
/* Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha. */
let n = 1;
while (n <= 100){
    if( n % 2 === 0 )
        console.log(n);
        n++
}