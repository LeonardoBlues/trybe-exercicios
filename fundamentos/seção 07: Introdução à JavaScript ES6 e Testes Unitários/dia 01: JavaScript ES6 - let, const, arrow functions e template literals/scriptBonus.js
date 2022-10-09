/* Exercício 1 */

const number = 5

/* Com o For */

const fatorial = (num) => {
  let result = 1;
  for (let index = 2; index <= num; index += 1) {
    result *= index;
  }
  return `Esse é o resultado do fatorial de ${number} com o for resultado: ${result}`
};
/* console.log(fatorial(number)); */

/* De forma recursiva */

const factorial2 = (number) => (number > 1) ? number * factorial2(number - 1) : 1;
/* console.log(`Esse é o resultado do fatorial de ${number} de forma recursiva resultado: ${factorial2(number)}`); */

/* Exercício 2 */

/* Com for of */

const longestWord = (phrase) => {
  const wordBreake = phrase.split(' ')
  let maxLength = 0;
  let result = '';
  for (const word of wordBreake) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

/* console.log(longestWord("oi como vai voce meu amigo")) */

/* Com o .sort() */

const longestWord2 = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
/* console.log(longestWord2("oi como vai voce meu amigo")) */

/* Exercício 3 */

let bnt = document.getElementById('bnt');
let contador = 0
bnt.addEventListener('click', () => document.getElementById('cont').innerText = contador += 1);


/* Exercício 4 */

function substituaX(nome) {
  const frase = 'Tryber x aqui!'
  arraySplit = frase.split(" ");
  for (let index = 0; index < arraySplit.length; index += 1) {
    if (arraySplit[index] === 'x') {
      arraySplit[index] = nome;
    }
  }
  return arraySplit.join(' ');
};

/* console.log(substituaX("leo")); */

function minhasSkills(func) {
  const skills = ['JavaScript', 'HTML', 'CSS']
  let allFunc = `${func} 
Minhas três principais habilidades são:`;
  skills.forEach((skill) => {
    allFunc = `${allFunc}
  - ${skill}`;
  });
  return allFunc;
}
/* console.log(minhasSkills(substituaX("leo"))); */
