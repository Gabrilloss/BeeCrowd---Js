var input = require('fs').readFileSync('./1064 - Positivos e Media/stdin', 'utf8');
var lines = input.split('\n').map(n => parseFloat(n));
/* Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados. */

let numPos = 0;
let media = 0
lines.map(n => {
    if(n > -1){
        numPos++;
        media += n;
    }
})

media = parseFloat(media) / parseFloat(numPos);
console.log(numPos + ' valores positivos\n' + media.toFixed(1));
