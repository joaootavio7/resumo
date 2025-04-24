/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();

console.log(`-------------------------------------`)
console.log(`-----       MÉDIA SEQUÊNCIA     -----`)
console.log(`-------------------------------------`)

let pergunta1= (teclado(`Você quer começar a sequência S/N?: `))

do{
    if(pergunta1 == `S`){
    let n1:number = parseInt(teclado(`Digite o primeiro número: `))
    let n2:number = parseInt(teclado(`Digite o segundo número: `))
    let media: number = (n1 + n2) /2
    console.log(`A média é ${media}`)
     
   else(pergunta1 == `N`){
   console.log (`Fim de programa`)
}

}while (n1 == 0 && n2 == 0){
console.log (`Fim de programa`)
}
