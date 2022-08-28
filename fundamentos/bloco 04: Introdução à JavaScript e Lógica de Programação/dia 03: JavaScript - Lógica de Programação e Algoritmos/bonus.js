let simbolo = "*"

/* Exercicio 01 */

let n = 5;
let linha1 = ""

for (let index = 0; index < n; index += 1){
    linha1 += simbolo;
}

for (index = 0; index < n; index += 1){
    console.log(linha1);
}

/* Exercicio 02 */

let n2 = 5;
simbolo = "*";
let linha2 = "";

for (let index = 0; index <= n2; index += 1){
    console.log(linha2);
    linha2+= simbolo;
}

/* Exercicio 03 */

let linha3 = "";
let n3 = 5;
let posicao = n3;

for (let linhaIndex = 0; linhaIndex < n3; linhaIndex += 1){
    for (colunaIndex = 0; colunaIndex <= n3; colunaIndex += 1){
        if (colunaIndex < posicao){
            linha3 += " ";
        } else {
            linha3 += simbolo
        }
    }   
    console.log(linha3);
    linha3 = ""
    posicao -= 1;
    
}

/* Exercicio 04 */

let linha4 = "";
let n4 = 5;

let midOflinha = (n4 + 1) / 2;
let ladoEsqeurdo = midOflinha;
let ladoDireito = midOflinha;

for (let linhaIndex = 0; linhaIndex <= midOflinha; linhaIndex += 1){
    for (colunaIndex = 0; colunaIndex <= n4; colunaIndex += 1){
        if (colunaIndex > ladoEsqeurdo && colunaIndex < ladoDireito){
            linha4 += simbolo;
        } else {
            linha4 += " ";
        }
    }   
    console.log(linha4);
    linha4 = "";
    ladoDireito += 1;
    ladoEsqeurdo -= 1;
    
}

/* Exercicio 05 */

let n5 = 7;
let midOflinha2 = (n5 + 1) / 2;
let ladoEsqeurdo2 = midOflinha2;
let ladoDireito2 = midOflinha2;

for (let linhaIndex = 1; linhaIndex <= midOflinha2; linhaIndex += 1) {
  let linhaSaida = '';
  for (let colunaIndex = 1; colunaIndex <= n5; colunaIndex += 1) {
    if (colunaIndex == ladoEsqeurdo2 || colunaIndex == ladoDireito2 || linhaIndex == midOflinha2) {
      linhaSaida += simbolo;
    } else {
      linhaSaida += ' ';
    }
  }
  ladoEsqeurdo2 -= 1;
  ladoDireito2 += 1;
  console.log(linhaSaida);
}


/* Exercicio 06 */


let divisor = 1;
let numeroParaVer = 31;

for (let number = 2; number <= numeroParaVer; number += 1) {
  if (numeroParaVer % number === 0) divisor += 1;
}

if (divisor === 2) { 
    console.log(numeroParaVer + ' é primo');
} else { 
    console.log(numeroParaVer + ' não é primo');
}