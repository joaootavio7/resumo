/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();

console.log (`><><><><><><><><><><><><><><><><>`)
console.log (`><>     COMPRA DE CARRO      <><>`)
console.log (`><><><><><><><><><><><><><><><><>`)


console.log(`Lista de Carros Disponível`)
console.log(`1-McLaren Senna`)    
console.log(` 2-Ferrari Roma`)
console.log(`3-Porsche Macan`)
console.log(`4-Pagani Zonda F cupê`)  
        
    

let pergunta1: number = parseInt (teclado(`Digite qual carro você quer?: `));

if (pergunta1 == 1){
let resposta: number = (teclado(`O carro custa 8 milhões vai querer pagar à vista(digite 1) ou parcelado?(digite 2): `));
if (resposta == 1){
let desconto: number = 8000000 - (8000000 * 0.15)
console.log (`O valor com desconto é ${desconto}`)
}else (resposta == 2)
let aumento: number = 8000000 + (8000000 * 0.13)
console.log (`O valor com aumento é ${aumento}`)
}

if (pergunta1 == 2){
let resposta: number = (teclado(`O carro custa 2 milhões vai querer pagar à vista(digite 1) ou parcelado?(digite 2): `));
if (resposta == 1){
let desconto: number = 2000000 - (2000000 * 0.15)
console.log (`O valor com desconto é ${desconto}`)
}else (resposta == 2)
let aumento: number = 2000000 + (2000000 * 0.13)
console.log (`O valor com aumento é ${aumento}`)
}

if (pergunta1 == 3){
let resposta: number = (teclado(`O carro custa 600 mil vai querer pagar à vista(digite 1) ou parcelado?(digite 2): `));
if (resposta == 1){
let desconto: number = 600000 - (600000 * 0.15)
console.log (`O valor com desconto é ${desconto}`)
}else (resposta == 2)
let aumento: number = 600000 + (600000 * 0.13)
console.log (`O valor com aumento é ${aumento}`)
}

if (pergunta1 == 4){
let resposta: number = (teclado(`O carro custa 4 milhões vai querer pagar à vista(digite 1) ou parcelado?(digite 2): `));
if (resposta == 1){
let desconto: number = 4000000 - (4000000 * 0.15)
console.log (`O valor com desconto é ${desconto}`)
}else (resposta == 2)
let aumento: number = 4000000 + (4000000 * 0.13)
console.log (`O valor com aumento é ${aumento}`)
}