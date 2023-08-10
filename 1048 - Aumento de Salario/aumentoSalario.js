var input = require('fs').readFileSync('./1048 - Aumento de Salario/stdin', 'utf8');
var lines = input.split('\n');
/*  Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, 
em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o 
percentual de reajuste ganho, conforme exemplo abaixo */
const salario = lines[0];
if (salario >= 0 && salario <= 400) {
    console.log(`Novo salario: ${(parseFloat(salario) +( salario*0.15)).toFixed(2)}\nReajuste ganho: ${(salario*0.15).toFixed(2)}\nEm percentual: 15 %`);
} else 
if (salario >= 400.01 && salario <= 800) {
    console.log(`Novo salario: ${(parseFloat(salario) + (salario*0.12)).toFixed(2)}\nReajuste ganho: ${(salario*0.12).toFixed(2)}\nEm percentual: 12 %`);
} else
if (salario >= 800.01 && salario <= 1200) {
    console.log(`Novo salario: ${(parseFloat(salario) + (salario*0.10)).toFixed(2)}\nReajuste ganho: ${(salario*0.10).toFixed(2)}\nEm percentual: 10 %`);
} else
if (salario >= 1200.01 && salario <= 2000) {
    console.log(`Novo salario: ${(parseFloat(salario) + (salario*0.07)).toFixed(2)}\nReajuste ganho: ${(salario*0.07).toFixed(2)}\nEm percentual: 7 %`);
} else
if (salario > 2000) {
    console.log(`Novo salario: ${(parseFloat(salario) + (salario*0.04)).toFixed(2)}\nReajuste ganho: ${(salario*0.04).toFixed(2)}\nEm percentual: 4 %`);
}