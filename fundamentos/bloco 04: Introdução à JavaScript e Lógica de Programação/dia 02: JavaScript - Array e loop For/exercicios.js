let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Exercicio 01 */

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

/* Exercicio 02 */

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma);

/* Exercicio 03 */

let mediaDeNumbers = 0;

mediaDeNumbers = soma / numbers.length;

console.log(mediaDeNumbers);

/* Exercicio 04 */

if (mediaDeNumbers > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

/* Exercicio 05 */

let maxValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > maxValor){
        maxValor = numbers[index];
    }
}

console.log(maxValor);

/* Exercicio 06 */

valorOdd = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        valorOdd += 1;
    }
}

if (valorOdd === 0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(valorOdd);
}

/* Exercicio 07 */

let minValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < minValor){
        minValor = numbers[index];
    }
}

console.log(minValor);

/* Exercicio 08 */

let cont25 = [];

for (let index = 1; index <= 25; index += 1){
    cont25.push(index);
}

console.log(cont25);

/* Exercicio 09 */

for (let index = 0; index < cont25.length; index += 1){
    console.log(cont25[index] / 2);
}
