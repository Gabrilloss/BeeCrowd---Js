var input = require('fs').readFileSync('./1035 - Teste de Selecao1/stdin', 'utf8');
var lines = input.split('\n');
/* Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for
 maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", 
 senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores. */
const linha1 = lines[0].replace("\r","").split(" ");
const a = linha1[0];
const b = linha1[1];
const c = linha1[2];
const d = linha1[3];
if (b > c && d > a && (c + d) > (a + b) && parseInt(c) && parseInt(d) && a % 2 === 0){
    console.log('Valores aceitos');
} else {
    console.log('Valores não aceitos');
}
