/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)()
console.log (`+++++++++++++++++++++++++++++++++`)
console.log (`++        MÉDIA DE IDADE       ++`)
console.log (`+++++++++++++++++++++++++++++++++`)

let idade: number = 0;
let genero: number = 0;
let total_de_homens: number =0;
let n_pess: number =0; 
let idade_homens: number =0;
let total_de_mulheres: number =0;
let idade_mulheres: number =0;
do{
    idade = parseInt(teclado(`Digite a idade da pessoa ${n_pess+1}: `));
    genero  = parseInt(teclado(`Digite o gênero da pessoa 1 para homens e 2 para mulheres ${n_pess+1}: `));

    if(idade>0 && genero ==  1){
      total_de_homens++;
      idade_homens++;

}    if(idade>0 && genero == 2){
    total_de_mulheres++;
    idade_mulheres++;
}
    else{
n_pess++;
}
}while(n_pess == 50)
    console.log(`o total de pessoas é´${n_pess}`);
    let media_homens: number = idade_homens/total_de_homens
    console.log(`A média de idade dos homens é´${media_homens}`);

    let media_mulheres: number = idade_mulheres/total_de_mulheres
    console.log(`A média de idade das mulheres é´${media_mulheres}`);

    