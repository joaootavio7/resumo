/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log (`~~~~    SOMA DOS VALORES   ~~~~~`)
console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)


let contador: number = 0;
while(contador <= 100){
let numero: number = parseFloat(teclado(`Dígite o número: `))
contador+=numero
}
console.log (`A sua soma passou do 100`)