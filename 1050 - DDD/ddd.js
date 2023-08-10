var input = require('fs').readFileSync('./1050 - DDD/stdin', 'utf8');
var lines = input.split('\n');
/* Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD 
correspondente ao número digitado. */
const ddd = lines[0];
if (ddd == 61){
    console.log('Brasilia');
}
else if( ddd == 71){
    console.log('Salvador');
}
else if( ddd == 11){
    console.log('Sao Paulo');
}
else if( ddd == 21){
    console.log('Rio de Janeiro');
}
else if( ddd == 32){
    console.log('Juiz de Fora');
}
else if( ddd == 19){
    console.log('Campinas');
}
else if( ddd == 27){
    console.log('Vitoria');
}
else if( ddd == 31){
    console.log('Belo Horizonte');
}
else {
    console.log('DDD nao cadastrado');
}
