/* Exercicio 01 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for(let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            let emOrdem = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = emOrdem;
        }
    }
}

console.log(numbers);

/* Exercicio 02 */

for (let index = 1; index < numbers.length; index += 1) {
    for(let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] > numbers[index2]) {
            let emOrdem = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = emOrdem;
        }
    }
}

console.log(numbers);

/* Exercicio 03 */

let numbersX = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers2 = [];

for (let index = 0; index < numbersX.length; index += 1) {
    if (index + 1 < numbersX.length){
        numbers2.push(numbersX[index] * numbersX[index + 1]);
    } else {
        numbers2.push(numbersX[index] * 2);
    }
}

console.log(numbers2);
