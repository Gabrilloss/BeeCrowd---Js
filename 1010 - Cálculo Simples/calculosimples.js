var input = require('fs').readFileSync('./1010 - Cálculo Simples/stdin', 'utf8');
var lines = input.split('\n');

/*Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o 
código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a 
ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros
 e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os 
dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. */
const linha1 = lines[0].replace("\r","").split(" ");
const linha2 = lines[1].replace("\r","").split(" ");

const peca1 = linha1[0];
 const numPeca1 = linha1[1];
 const valPeca1 = linha1[2];
 const peca2 = linha2[0];
 const numPeca2 = linha2[1];
 const valPeca2 = linha2[2];

 let resultado = (valPeca1 * numPeca1) + (valPeca2 * numPeca2);

 console.log('VALOR A PAGAR: R$ ' + resultado.toFixed(2));