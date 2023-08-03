var input = require('fs').readFileSync('./1021 - Cedulas e Moedas/stdin', 'utf8');
/* Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
====================================================================================================
let valor = parseFloat(input);
const notas = [100, 50, 20, 10 , 5, 2];
const moedas = [1.00, 0.50, 0.25, 0.10 , 0.05, 0.01];
console.log('NOTAS:')
for (const nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`);
    valor = valor % nota;


}
console.log('MOEDAS:')
for (let moeda of moedas){
    moeda = parseFloat(moeda).toFixed(2);
    let qtdMoedas = parseInt(valor / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda}`);
    valor = valor % moeda;
} */
let valor = parseFloat(input).toFixed(2);

let cem = 0;
let cin = 0;
let vin = 0;
let dez = 0;
let cic = 0;
let doi = 0;

let mRea = 0;
let mCin = 0;
let mVin = 0;
let mDez = 0;
let mCic = 0;
let mUm = 0;

if (valor > 0 && valor < 1000000.00) {
    while (valor >= 2) {
        if (valor >= 100) {cem += 1, valor -= 100}
        else if (valor >= 50) {cin += 1, valor -= 50}
        else if (valor >= 20) {vin += 1, valor -= 20}
        else if (valor >= 10) {dez += 1, valor -= 10}
        else if (valor >= 5) {cic += 1, valor -= 5}
        else if (valor >= 2) {doi += 1, valor -= 2}
        valor = parseFloat(valor).toFixed(2);
    }
    while (valor > 0) {
        if (valor >= 1) {mRea += 1, valor -= 1}
        else if (valor >= 0.50) {mCin += 1, valor -= 0.50}
        else if (valor >= 0.25) {mVin += 1, valor -= 0.25}
        else if (valor >= 0.10) {mDez += 1, valor -= 0.10}
        else if (valor >= 0.05) {mCic += 1, valor -= 0.05}
        else if (valor >= 0.01) {mUm += 1, valor -= 0.01}
        valor = parseFloat(valor).toFixed(2);
    }
}

let resposta = `NOTAS:\n${cem} nota(s) de R$ 100.00\n${cin} nota(s) de R$ 50.00\n${vin} nota(s) de R$ 20.00\n${dez} nota(s) de R$ 10.00\n${cic} nota(s) de R$ 5.00\n${doi} nota(s) de R$ 2.00\nMOEDAS:\n${mRea} moeda(s) de R$ 1.00\n${mCin} moeda(s) de R$ 0.50\n${mVin} moeda(s) de R$ 0.25\n${mDez} moeda(s) de R$ 0.10\n${mCic} moeda(s) de R$ 0.05\n${mUm} moeda(s) de R$ 0.01`;

console.log(resposta);

