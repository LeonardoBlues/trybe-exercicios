/* Exercicio 01 */

function soma(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mult(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function mod(a, b) {
    return a % b;
}

console.log(soma(15, 5));
console.log(sub(15, 5));
console.log(mult(15, 5));
console.log(div(15, 5));
console.log(mod(15, 5));

/* Exercicio 02 */

function maiorNum(num1, num2){
if (num1 > num2){
    return (num1) + " é maior que " + num2
    } else if (num1 < num2){
        return (num2) + " é maior que " + num1;
    } else{
        return ("num1 e num2 são do mesmo valor") + ": " + num1
    }
}

console.log(maiorNum(48, 75));

/* Exercicio 03 */

function maiorDeTres(num10, num11, num12){

if (num10 > num11 && num10 > num12){
    return "O maior número é: " + (num10);
    } else if (num11 > num10 && num11 > num12){
        return "O maior número é: " + (num11);
    } else if (num12 > num10 && num12 > num11){
        return "O maior número é: " + (num12);
    } else if (num10 === num11 && num10 === num12) {
        return ("num10, num11 e num12 são do mesmo valor" + ": " + num10);
    } else {
        return ("Apenas 2 valores entre num10, num11 e num12 são iguais: " + num10 + " " + num11 + " " + num12);
    }
}

console.log(maiorDeTres(97, 147, 50));
console.log(maiorDeTres(45, 23, 45));
console.log(maiorDeTres(50, 50, 50));

/* Exercicio 04 */

function positiveNegative(number){
    if (number > 0){
        return ("Positive");
    } else if ( number < 0) {
        return ("Negative");
    } else {
        return ("Zero");
  }
}

console.log(positiveNegative(5));

/* Exercicio 05 */

function triangleAnglesValidate(var1, var2, var3) {
    if (var1 + var2 + var3 === 180) {
        return (true);
    } else if (var1 && var2 && var3 > 0) {
        return(false);
    } else {
        return ("Erro");
    }
}

console.log(triangleAnglesValidate(80, 50, 50));
