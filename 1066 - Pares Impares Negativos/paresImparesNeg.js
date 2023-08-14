var input = require('fs').readFileSync('./1066 - Pares Impares Negativos/stdin', 'utf8');
var lines = input.split('\n');
/* Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma. */
let numPos = 0;
let numPar = 0;
let numImpar = 0;
let numNeg = 0;
for (let x in lines) {
    if (!Number.isNaN(parseInt(lines[x]))) {
        if (parseInt(lines[x]) % 2 === 0) numPar++;
        else numImpar++;
    
        if (parseInt(lines[x]) > 0) numPos++;
        else 
        if (parseInt(lines[x]) < 0) numNeg++;
    }
}
console.log(`${numPar} valor(es) par(es) \n${numImpar} valor(es) impar(es)\n${numPos} valor(es) positivo(s)\n${numNeg} valor(es) negativo(s)`);
