/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();

console.log(`=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-==-`)
console.log(`=-=-       PAR E IMPAR        -==-`)
console.log(`=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-==-`)


let contadorpar: number = 0;
let contadorimpar: number = 0;
let textopar: string = ``;
let textoimpar: string = ``;

let n1: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n2: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n3: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n4: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n5: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n6: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n7: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n8: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n9: number = parseInt (teclado(`Digite qual o primeiro número?: `));
let n10: number = parseInt (teclado(`Digite qual o primeiro número?: `));

if (n1 == 2 || n1 == 4 || n1 == 6 || n1 == 8 || n1 == 10 || n1 == 12 || n1 == 14 ||n1 == 16 ||n1 == 18 ||n1 == 20 ||n1 == 22 ||n1 == 24 ||n1 == 26 ||n1 == 28 ||n1 == 30 ||n1 ==  32 ||n1 == 34 ||n1 == 36 ||n1 == 38 ||n1 == 40 ||n1 == 42 ||n1 == 44 ||n1 == 46 ||n1 == 48 ||n1 == 50 ||n1 == 52 ||n1 == 54 ||n1 == 56 ||n1 == 58 ||n1 == 60 ||n1 == 62 || n1 == 64 || n1 == 66 || n1 == 68 || n1 == 70 || n1 == 72 || n1 == 74 || n1 == 76 || n1 == 78 || n1 == 80 || n1 == 82 || n1 == 84 || n1 == 86 || n1 == 88 || n1 == 90 || n1 == 92 || n1 == 94 || n1 == 96 || n1 == 98 || n1 == 100){
contadorpar++;
textopar += n1 + ` `;
}
else {
contadorimpar++
textoimpar += n1 + ` `;}

if (n2 == 2 || n2 == 4 || n2 == 6 || n2 == 8 || n2 == 10 || n2 == 12 || n2 == 14 ||n2 == 16 ||n2 == 18 ||n2 == 20 ||n2 == 22 ||n2 == 24 ||n2 == 26 ||n2 == 28 ||n2 == 30 ||n2 ==  32 ||n2 == 34 ||n2 == 36 ||n2 == 38 ||n2 == 40 ||n2 == 42 ||n2 == 44 ||n2 == 46 ||n2 == 48 ||n2 == 50 ||n2 == 52 ||n2 == 54 ||n2 == 56 ||n2 == 58 ||n2 == 60 ||n2 == 62 || n2 == 64 || n2 == 66 || n2 == 68 || n2 == 70 || n2 == 72 || n2 == 74 || n2 == 76 || n2 == 78 || n2 == 80 || n2 == 82 || n2 == 84 || n2 == 86 || n2 == 88 || n2 == 90 || n2 == 92 || n2 == 94 || n2 == 96 || n2 == 98 || n2 == 100){
contadorpar++;
textopar += n2 + ` `;
}
else {
contadorimpar++
textoimpar += n2 + ` `;}

if (n3 == 2 || n3 == 4 || n3 == 6 || n3 == 8 || n3 == 10 || n3 == 12 || n3 == 14 ||n3 == 16 ||n3 == 18 ||n3 == 20 ||n3 == 22 ||n3 == 24 ||n3 == 26 ||n3 == 28 ||n3 == 30 ||n3 ==  32 ||n3 == 34 ||n3 == 36 ||n3 == 38 ||n3 == 40 ||n3 == 42 ||n3 == 44 ||n3 == 46 ||n3 == 48 ||n3 == 50 ||n3 == 52 ||n3 == 54 ||n3 == 56 ||n3 == 58 ||n3 == 60 ||n3 == 62 || n3 == 64 || n3 == 66 || n3 == 68 || n3 == 70 || n3 == 72 || n3 == 74 || n3 == 76 || n3 == 78 || n3 == 80 || n3 == 82 || n3 == 84 || n3 == 86 || n3 == 88 || n3 == 90 || n3 == 92 || n3 == 94 || n3 == 96 || n3 == 98 || n3 == 100){
contadorpar++;
textopar += n3 + ` `;
}
else {
contadorimpar++
textoimpar += n3 + ` `;}

if (n4 == 2 || n4 == 4 || n4 == 6 || n4 == 8 || n4 == 10 || n4 == 12 || n4 == 14 || n4 == 16 || n4 == 18 || n4 == 20 || n4 == 22 || n4 == 24 || n4 == 26 || n4 == 28 || n4 == 30 || n4 == 32 || n4 == 34 || n4 == 36 || n4 == 38 || n4 == 40 || n4 == 42 || n4 == 44 || n4 == 46 || n4 == 48 || n4 == 50 || n4 == 52 || n4 == 54 || n4 == 56 || n4 == 58 || n4 == 60 || n4 == 62 || n4 == 64 || n4 == 66 || n4 == 68 || n4 == 70 || n4 == 72 || n4 == 74 || n4 == 76 || n4 == 78 || n4 == 80 || n4 == 82 || n4 == 84 || n4 == 86 || n4 == 88 || n4 == 90 || n4 == 92 || n4 == 94 || n4 == 96 || n4 == 98 || n4 == 100) {
contadorpar++;
textopar += n4 + ` `;
} else {
contadorimpar++;
textoimpar += n4 + ` `;
}

if (n5 == 2 || n5 == 4 || n5 == 6 || n5 == 8 || n5 == 10 || n5 == 12 || n5 == 14 || n5 == 16 || n5 == 18 || n5 == 20 || n5 == 22 || n5 == 24 || n5 == 26 || n5 == 28 || n5 == 30 || n5 == 32 || n5 == 34 || n5 == 36 || n5 == 38 || n5 == 40 || n5 == 42 || n5 == 44 || n5 == 46 || n5 == 48 || n5 == 50 || n5 == 52 || n5 == 54 || n5 == 56 || n5 == 58 || n5 == 60 || n5 == 62 || n5 == 64 || n5 == 66 || n5 == 68 || n5 == 70 || n5 == 72 || n5 == 74 || n5 == 76 || n5 == 78 || n5 == 80 || n5 == 82 || n5 == 84 || n5 == 86 || n5 == 88 || n5 == 90 || n5 == 92 || n5 == 94 || n5 == 96 || n5 == 98 || n5 == 100) {
contadorpar++;
textopar += n5 + ` `;
} else {
contadorimpar++;
textoimpar += n5 + ` `;
}

if (n6 == 2 || n6 == 4 || n6 == 6 || n6 == 8 || n6 == 10 || n6 == 12 || n6 == 14 || n6 == 16 || n6 == 18 || n6 == 20 || n6 == 22 || n6 == 24 || n6 == 26 || n6 == 28 || n6 == 30 || n6 == 32 || n6 == 34 || n6 == 36 || n6 == 38 || n6 == 40 || n6 == 42 || n6 == 44 || n6 == 46 || n6 == 48 || n6 == 50 || n6 == 52 || n6 == 54 || n6 == 56 || n6 == 58 || n6 == 60 || n6 == 62 || n6 == 64 || n6 == 66 || n6 == 68 || n6 == 70 || n6 == 72 || n6 == 74 || n6 == 76 || n6 == 78 || n6 == 80 || n6 == 82 || n6 == 84 || n6 == 86 || n6 == 88 || n6 == 90 || n6 == 92 || n6 == 94 || n6 == 96 || n6 == 98 || n6 == 100) {
contadorpar++;
textopar += n6 + ` `;
} else {
contadorimpar++;
textoimpar += n6 + ` `;
}

if (n7 == 2 || n7 == 4 || n7 == 6 || n7 == 8 || n7 == 10 || n7 == 12 || n7 == 14 || n7 == 16 || n7 == 18 || n7 == 20 || n7 == 22 || n7 == 24 || n7 == 26 || n7 == 28 || n7 == 30 || n7 == 32 || n7 == 34 || n7 == 36 || n7 == 38 || n7 == 40 || n7 == 42 || n7 == 44 || n7 == 46 || n7 == 48 || n7 == 50 || n7 == 52 || n7 == 54 || n7 == 56 || n7 == 58 || n7 == 60 || n7 == 62 || n7 == 64 || n7 == 66 || n7 == 68 || n7 == 70 || n7 == 72 || n7 == 74 || n7 == 76 || n7 == 78 || n7 == 80 || n7 == 82 || n7 == 84 || n7 == 86 || n7 == 88 || n7 == 90 || n7 == 92 || n7 == 94 || n7 == 96 || n7 == 98 || n7 == 100) {
    if (n10 == 2 || n10 == 4 || n10 == 6 || n10 == 8 || n10 == 10 || n10 == 12 || n10 == 14 || n10 == 16 || n10 == 18 || n10 == 20 || n10 == 22 || n10 == 24 || n10 == 26 || n10 == 28 || n10 == 30 || n10 == 32 || n10 == 34 || n10 == 36 || n10 == 38 || n10 == 40 || n10 == 42 || n10 == 44 || n10 == 46 || n10 == 48 || n10 == 50 || n10 == 52 || n10 == 54 || n10 == 56 || n10 == 58 || n10 == 60 || n10 == 62 || n10 == 64 || n10 == 66 || n10 == 68 || n10 == 70 || n10 == 72 || n10 == 74 || n10 == 76 || n10 == 78 || n10 == 80 || n10 == 82 || n10 == 84 || n10 == 86 || n10 == 88 || n10 == 90 || n10 == 92 || n10 == 94 || n10 == 96 || n10 == 98 || n10 == 100) {
        contadorpar++;
        textopar += n10 + ` `;
    } else {
        contadorimpar++;
        textoimpar += n10 + ` `;
    }
    contadorpar++;
textopar += n7 + ` `;
} else {
contadorimpar++;
textoimpar += n7 + ` `;
}

if (n8 == 2 || n8 == 4 || n8 == 6 || n8 == 8 || n8 == 10 || n8 == 12 || n8 == 14 || n8 == 16 || n8 == 18 || n8 == 20 || n8 == 22 || n8 == 24 || n8 == 26 || n8 == 28 || n8 == 30 || n8 == 32 || n8 == 34 || n8 == 36 || n8 == 38 || n8 == 40 || n8 == 42 || n8 == 44 || n8 == 46 || n8 == 48 || n8 == 50 || n8 == 52 || n8 == 54 || n8 == 56 || n8 == 58 || n8 == 60 || n8 == 62 || n8 == 64 || n8 == 66 || n8 == 68 || n8 == 70 || n8 == 72 || n8 == 74 || n8 == 76 || n8 == 78 || n8 == 80 || n8 == 82 || n8 == 84 || n8 == 86 || n8 == 88 || n8 == 90 || n8 == 92 || n8 == 94 || n8 == 96 || n8 == 98 || n8 == 100) {
contadorpar++;
textopar += n8 + ` `;
} else {
contadorimpar++;
textoimpar += n8 + ` `;
}
if (n9 == 2 || n9 == 4 || n9 == 6 || n9 == 8 || n9 == 10 || n9 == 12 || n9 == 14 || n9 == 16 || n9 == 18 || n9 == 20 || n9 == 22 || n9 == 24 || n9 == 26 || n9 == 28 || n9 == 30 || n9 == 32 || n9 == 34 || n9 == 36 || n9 == 38 || n9 == 40 || n9 == 42 || n9 == 44 || n9 == 46 || n9 == 48 || n9 == 50 || n9 == 52 || n9 == 54 || n9 == 56 || n9 == 58 || n9 == 60 || n9 == 62 || n9 == 64 || n9 == 66 || n9 == 68 || n9 == 70 || n9 == 72 || n9 == 74 || n9 == 76 || n9 == 78 || n9 == 80 || n9 == 82 || n9 == 84 || n9 == 86 || n9 == 88 || n9 == 90 || n9 == 92 || n9 == 94 || n9 == 96 || n9 == 98 || n9 == 100) {
contadorpar++;
textopar += n9 + ` `;
} else {
contadorimpar++;
textoimpar += n9 + ` `;
}

if (n10 == 2 || n10 == 4 || n10 == 6 || n10 == 8 || n10 == 10 || n10 == 12 || n10 == 14 || n10 == 16 || n10 == 18 || n10 == 20 || n10 == 22 || n10 == 24 || n10 == 26 || n10 == 28 || n10 == 30 || n10 == 32 || n10 == 34 || n10 == 36 || n10 == 38 || n10 == 40 || n10 == 42 || n10 == 44 || n10 == 46 || n10 == 48 || n10 == 50 || n10 == 52 || n10 == 54 || n10 == 56 || n10 == 58 || n10 == 60 || n10 == 62 || n10 == 64 || n10 == 66 || n10 == 68 || n10 == 70 || n10 == 72 || n10 == 74 || n10 == 76 || n10 == 78 || n10 == 80 || n10 == 82 || n10 == 84 || n10 == 86 || n10 == 88 || n10 == 90 || n10 == 92 || n10 == 94 || n10 == 96 || n10 == 98 || n10 == 100) {
contadorpar++;
textopar += n10 + ` `;
console.log(`O texto tem ${contadorpar} pares `)
console.log(`E elas são ${textopar} `)
} else {
contadorimpar++;
textoimpar += n10 + ` `;
console.log(`O texto tem ${contadorimpar} pares `)
console.log(`E elas são ${textoimpar} `)
}
