var input = require('fs').readFileSync('./1019 - Conversão de Tempo/stdin', 'utf8');
var lines = input.split('\n');

/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.*/
let tempo = lines[0];
let hora = 0;
let minutos = 0;
let segundos = 0;
/* while(tempo > 0 ){
    if ( hora > 3600){
    hora++;
    tempo -= 3600;
    }
    else if(tempo > 60){
        minutos++;
        tempo -=60;
    } else{
        segundos++;
        tempo --;
    }
}*/
    while (tempo > 0) {
        if (tempo > 3600) hora++, tempo-= 3600;
        else if (tempo > 60) minutos++, tempo -= 60;
        else segundos++, tempo--;
    }

console.log(`${hora}:${minutos}:${segundos}`);
