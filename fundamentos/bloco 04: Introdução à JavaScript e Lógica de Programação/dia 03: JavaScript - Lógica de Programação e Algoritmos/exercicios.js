/* Exercicio 01 */

let fatorial = 1;

for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
}

console.log(fatorial);

/* Exercicio 02 */

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

/* Exercicio 03 */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorWord = array[0];
let menorWord = array[0];

for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorWord.length) {
        maiorWord = array[index];
      }
}
console.log(maiorWord);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorWord.length) {
      menorWord = array[index];
    }
}
console.log(menorWord);

/* Exercicio 04 */

let maiorPrimo = 0;

for (let index = 2; index <= 50; index += 1) {
  let ePrime = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      ePrime = false;
    }
  }
  if (ePrime) {
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);