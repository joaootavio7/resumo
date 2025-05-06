/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)()

console.log(`===========================`)
console.log(`==    MÉDIA DE ALTURA    ==`)
console.log(`===========================`)

let idade: number = 0;
let altura: number = 0;
let maioridade: number = 0;
let somaaltura: number = 0;
let cont: number = 0;

while (cont < 10) {
    idade = parseInt(teclado(`Digite a idade da pessoa: `));
    altura = parseInt(teclado(`Digite a altura da pessoa: `));


    if (idade >= 18) {
        maioridade++
        somaaltura += altura
    }

    cont++

}
console.log(`A média da altura das pessoas maiores de idade é ${somaaltura / maioridade}`)
console.log(`O número depessoas maiores de idade é ${maioridade}`)