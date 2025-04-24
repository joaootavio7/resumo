/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)()

console.log(`================================`)
console.log(`=         IMPAR E PAR          =`)
console.log(`================================`)

let n1:number = parseInt(teclado(`Digite o primeiro número: `))
let n2:number = parseInt(teclado(`Digite o segundo número: `))
let atual: number = n1

if(n1 > n2) {
atual = n2
n2 = n1
}
console.log(`Números ímpares`)
while (atual <= n2){
if (atual % 2 !==0){
console.log(atual)
}
atual++
}