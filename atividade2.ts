/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:João Otávio Petri da Silva
*/
let teclado = require(`prompt-sync`)();
let n1: number = (teclado(`Digite o valor do n1: `));
let n2: number = (teclado(`Digite o valor do n2: `));
let n3: number = (teclado(`Digite o valor do n3: `));

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {

        console.log(`Ordem decrescente: ${n1}, ${n2}, ${n3}`);

    } else {
        console.log(`Ordem decrescente: ${n1}, ${n3}, ${n2}`);

    }
} else if (n2 > n1 && n2 > n3) {
    console.log(`Ordem decrescente: ${n2}, ${n1}, ${n3}`);

} else {
    console.log(`Ordem decrescente: ${n2}, ${n3}, ${n1}`)

}
if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
        console.log(`Ordem decrescente: ${n3}, ${n1}, ${n2}`)

    } else {
        console.log(`Ordem decrescente: ${n3}, ${n2}, ${n1}`)
    }
}

