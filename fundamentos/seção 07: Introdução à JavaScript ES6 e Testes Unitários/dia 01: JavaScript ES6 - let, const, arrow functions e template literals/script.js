/* Exercício 1 */

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    return ifScope
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    return elseScope
  }
}

console.log(testingScope(true))

/* Exercício 2 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => array.sort((a, b) => (a - b)); 
const sortOddsAndEvens2 = (array) => `Os números ${array.sort((a, b) => (a - b))} se encontram ordenados de forma crescente!`; 

console.log(sortOddsAndEvens(oddsAndEvens));
console.log(sortOddsAndEvens2(oddsAndEvens));