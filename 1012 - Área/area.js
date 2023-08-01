var input = require('fs').readFileSync('./1012 - Área/stdin', 'utf8');
var lines = input.split('\n');

/* Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal. */
/*// triangulo
const areaTriangulo = parseFloat((a*c)/2).toFixed(3);
// circulo
const areaCirculo = parseFloat(3.14159*(c**2)).toFixed(3);
// trapezio
const areaTrapezio= parseFloat(((a+b)*c)/2).toFixed(3);
// quadrado
const areaQuadrado = parseFloat(b**2).toFixed(3);
// retangulo
const areaRetangulo = parseFloat(a*b).toFixed(3);*/

const a = parseFloat(input.split(" ")[0]);
const b = parseFloat(input.split(" ")[1]);
const c = parseFloat(input.split(" ")[2]);
const A = parseFloat(input.split(" ")[0]);
const B = parseFloat(input.split(" ")[1]);
const C = parseFloat(input.split(" ")[2]);
const pi = 3.14159;
const areaTriangulo = parseFloat(A * C) / 2;
const areaCirculo = parseFloat(pi * (C ** 2));
const areaTrapezio = parseFloat(((A + B) * C) / 2);
const areaQuadrado = parseFloat(B * B);
const areaRetangulo = parseFloat(A * B);

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`);