var input = require('fs').readFileSync('./1045 - Tipos de Triangulos/stdin', 'utf8');
var lines = input.split('\n');
/* Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o 
maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, 
sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada */

const numeros = input.split(" ");
const a = parseFloat(numeros[0]);
const b = parseFloat(numeros[1]);
const c = parseFloat(numeros[2]);

if (a > 0 && b > 0 && c > 0) {
    const x = Math.max(a, b, c);
    let y = 0.0;
    let z = 0.0;

    if (x === a) {y = Math.max(b, c), z = Math.min(b, c);}
    else if (x === b) {y = Math.max(a, c), z = Math.min(a, c);}
    else if (x === c) {y = Math.max(a, b), z = Math.min(a, b);}

    if (x >= (y+z)) {
        console.log("NAO FORMA TRIANGULO");
    } else {
        if ((x*x) === ((y*y) + (z*z))) {console.log("TRIANGULO RETANGULO");}
        if ((x*x) > ((y*y) + (z*z))) {console.log("TRIANGULO OBTUSANGULO");}
        if ((x*x) < ((y*y) + (z*z))) {console.log("TRIANGULO ACUTANGULO");}
        if (x === y && y === z) {console.log("TRIANGULO EQUILATERO");}
        if ((x !== y && (y === z || z === x)) || (y !== z && (z === x || x === y))) {console.log("TRIANGULO ISOSCELES");}
    }
}



