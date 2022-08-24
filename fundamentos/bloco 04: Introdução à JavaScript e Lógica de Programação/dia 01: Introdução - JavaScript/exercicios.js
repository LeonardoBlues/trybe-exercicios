/* Exercicio 1 */

const a = 6;
const b = 54;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* Exercicio 2 */

const num1 = 48;
const num2 = 75;

if (num1 > num2){
    console.log(num1);
} else if (num1 < num2){
    console.log(num2);
} else{
    console.log("num1 e num2 são do mesmo valor");
    console.log("num1: " + num1);
    console.log("num2: " + num2);
}

/* Exercicio 3 */

const num10 = 97;
const num11 = 147;
const num12 = 50;

if (num10 > num11 && num10 > num12){
    console.log(num10);
} else if (num11 > num10 && num11 > num12){
    console.log(num11);
} else if (num12 > num10 && num12 > num11){
    console.log(num12);
} else if (num10 === (num11 && num12)) {
 console.log("num10, num11 e num12 são do mesmo valor");
    console.log("num10: " + num10);
    console.log("num11: " + num11);
    console.log("num12: " + num12);
} else {
    console.log("Apenas 2 valores entre num10, num11 e 12 são iguais");
    console.log("num10: " + num10);
    console.log("num11: " + num11);
    console.log("num12: " + num12);
}

/* Exercicio 4 */

let index = 0.1;

if (index > 0){
    console.log("Positive");
} else if ( index < 0) {
    console.log("Negative");
} else{
    console.log("Zero");
}

/* Exercicio 5 */

let var1 = 80;
let var2 = 50;
let var3 = 50;

if (var1 + var2 + var3 === 180) {
    console.log(true);
} else if (var1 && var2 && var3 > 0) {
    console.log(false);
} else {
    console.log("Erro");
}

/* Exercicio 6 */

let pecaDeXadrez = "TOWER";

switch (pecaDeXadrez.toLowerCase()) {
  case "torre":
    console.log("Torre se move na Horizontal e vertical.");
    break;
  case "rainha":
    console.log("Rainha se move na Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log("Cavalo se move em "L" e pode pular sobre as peças.");
    break;
  case "bispo":
    console.log("Bispo se move em Diagonal.");
    break;
  case "peão":
    console.log("Peão se move apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  default:
    console.log("Erro, peça não encontrada");
    break;
}

/* Exercicio 7 */

let notaX = 90

if (notaX >= 90 && notaX <= 100){
    console.log("A");
} else if (notaX >= 80 && notaX < 90){
    console.log("B");
} else if (notaX >= 70 && notaX < 80){
    console.log("C");
} else if (notaX >= 60 && notaX < 70){
    console.log("D");
} else if (notaX >= 50 && notaX < 60){
    console.log("F");
} else if (notaX < 50 && notaX >= 0){
    console.log("F");
} else {
    console.log("Erro valor da nota invalido")
}

/* Exercicio 8 */

const numX = 15
const numY = 35
const numZ = 49

if (numX % 2 === 0 || numY % 2 === 0 || numZ % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

/* Exercicio 9 */

const numA = 16
const numB = 36
const numC = 47

if (numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

/* Exercicio 10 */

const custo = 100
const valorDaVenda = 220

if (custo >= 0 && valorDaVenda >= 0){
    let valorCustoTotal = custo * 1.2
    let lucro = valorDaVenda - valorCustoTotal
    let venda1000 = lucro * 1000
    console.log(venda1000)
} else {
    console.log("Erro valor menor que zero")
}


/* Exercicio 11 */

let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let valorINSS;
let valorIR;

if (salarioBruto > 0 && salarioBruto <= 1556.94){
    valorINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    valorINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    valorINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82){
    valorINSS = 570.88;
} else {
    console.log("Valor invalido");
}

salarioBase = salarioBruto - valorINSS;

if (salarioBase > 0 && salarioBase <= 1903.98){
    valorIR = 0;
} else if (salarioBase >= 1903.98  && salarioBase <= 2826.65){
    valorIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66  && salarioBase <= 3751.05){
    valorIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06  && salarioBase <= 4664.68){
    valorIR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68){
    valorIR = (salarioBase * 0.275) - 869.36;
} else {
    console.log("Valor Incorreto");
}

salarioLiquido = salarioBase - valorIR;
console.log(salarioLiquido);
