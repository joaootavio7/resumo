/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
let cond: string = ``;
let cont: number = 0;
let soma: number = 0;
let n1: number = 0;

console.log(`-------------------------------------`)
console.log(`-----       MÉDIA SEQUÊNCIA     -----`)
console.log(`-------------------------------------`)

do{

    n1=parseInt(teclado(`Digite o número a ser calculado: `));
    soma =+ n1; 
    cont++;
    
    cond=teclado(`Digite ENTER para continuar ou qualquer coisa para sair:`);
}while (cond == ``);

console.log(`A média dos números é ${soma/cont}`);