/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==`)
console.log(`=-=-=-     variável x e y   =-=-==`)
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==`)

let x = parseInt(teclado(`Digite o valor de x: `))
let y = parseInt(teclado(`Digite o valor de y: `))
let z = x

let valores1: number = x = y
let valores2: number = y = z

console.log(`O resultado deu x= ${valores1} e y= ${valores2}`)
