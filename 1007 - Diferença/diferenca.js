var input = require('fs').readFileSync('./1007 - Diferença/stdin', 'utf8');
var lines = input.split('\n');
/*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo 
produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco 
antes e depois da igualdade. */
const A = lines[0];
const B = lines[1];
const C = lines[2];
const D = lines[3];
let diferenca = (A * B - C * D);

console.log('DIFERENCA = ' + diferenca );
