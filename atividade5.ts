/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();


let numero1 = parseInt(teclado(`Digite o valor da primeira nota: `))

let numero2 = parseInt(teclado(`Digite o valor da segunda nota: `))

let numero3 = parseInt(teclado(`Digite o valor da terceira nota: `))

let numero4 = parseInt(teclado(`Digite o valor da quarta nota: `))

let numero5 = parseInt(teclado(`Digite o valor da quinta nota: `))

if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4 && numero1 > numero5) {
    console.log(`o maior número é ${numero1}`)
}

else if (numero2 > numero1 && numero2 > numero3 && numero2 > numero4 && numero2 > numero5) {
    console.log(`o maior número é ${numero2}`)
}

else if (numero3 > numero1 && numero3 > numero2 && numero3 > numero4 && numero3 > numero5) {
    console.log(`o maior número é ${numero3}`)
}

else if (numero4 > numero1 && numero4 > numero2 && numero4 > numero3 && numero4 > numero5) {
    console.log(`o maior número é ${numero4}`)
}

else if (numero5 > numero1 && numero5 > numero2 && numero5 > numero3 && numero5 > numero4) {
    console.log(`o maior número é ${numero5}`)
}

let pergunta = (teclado(`Você quer o menor número e a média? S/N? `))

if (numero1 < numero2 && numero1 < numero3 && numero1 < numero4 && numero1 < numero5) {
    console.log(`o menor número é ${numero1}`)
}

else if (numero2 < numero1 && numero2 < numero3 && numero2 < numero4 && numero2 < numero5) {
    console.log(`o menor número é ${numero2}`)
}

else if (numero3 < numero1 && numero3 < numero2 && numero3 < numero4 && numero3 < numero5) {
    console.log(`o menor número é ${numero3}`)
}

else if (numero4 < numero1 && numero4 < numero2 && numero4 < numero3 && numero4 < numero5) {
    console.log(`o menor número é ${numero4}`)
}

else console.log(`o menor número é ${numero5}`)

let media: number = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
console.log(`A média é ${media}`)