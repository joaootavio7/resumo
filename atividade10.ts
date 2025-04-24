/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)()

console.log (`<><><><><<><><><><><><><><><><><>`)
console.log (`<><>         CONTADOR        <><>`)
console.log (`<><><><><<><><><><><><><><><><><>`)

let idade: number = 0;
let altura: number = 0;
let total_pess_atend_condicao: number =0;
let n_pess: number =0; 

let contador: number = 0;
do{
    idade = parseInt(teclado(`Digite a idade da pessoa ${n_pess+1}: `));
    altura = parseInt(teclado(`Digite a altura da pessoa ${n_pess+1}: `));

    if(idade> 18){
      total_pess_atend_condicao++;
      altura++

}
    
else{
n_pess++;
}


}while(n_pess < 10)
    console.log(`o total de pessoas é´${n_pess}`);
    let media:number =  altura / total_pess_atend_condicao
    console.log(`a média de altura das pessoas maiores de idade é´${media}`);