var input = require('fs').readFileSync('./1044 - Multiplos/stdin', 'utf8');
var lines = input.split('\n');
/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima. */
const linha1 = lines[0].replace("\r","").split(" ");
const a = linha1[0];
const b = linha1[1];
if (a % b === 0 || b % a === 0) {
        console.log('Sao Multiplos');
}else{
        console.log('Nao sao Multiplos');
}