/* Exercicio 01 */

let algarismosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

function numerosRomanos(numeros){
    numeros = numeros.toLowerCase();
    let n = numeros.length;
    let final = algarismosRomanos[numeros[n - 1]];
    let atual = algarismosRomanos[numeros[n - 1]];
    for (let index = 2; index <= n; index += 1){
        let prox = algarismosRomanos[numeros[n - index]];
        if (atual <= prox) {
            final += prox;
        } else {
            final -= prox;
        }
        atual = prox;
    }
    return final
}

console.log(numerosRomanos('XI'));
console.log(numerosRomanos('IX'));

/* Exercicio 02 */

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let resultado = [];
   
    for (let index = 0; index < vector.length; index += 1) {
        let n = vector[index];
        
        for (let index2 = 0; index2 < n.length; index2 += 1) {
            let atual = n[index2];
            
            if ((atual % 2) === 0) {
                resultado.push(atual);
            }
        }
    }
    return resultado
}

console.log(arrayOfNumbers(vector));

/* Exercicio 03 */

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  
  const result = {};
  
  for (let index = 0; index < basket.length; index += 1) {
    const fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }
  
  const summaries = [];
  for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
  }
  
  console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

  /* Exercicio 04 */

  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
}

console.log("O morador do bloco 2 de nome " + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + " mora no " + moradores.blocoDois[1].andar + "º andar, apartamento" + " " + moradores.blocoDois[1].apartamento + ".")

  /* Exercicio 05 */

  for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }
  
  for (let index = 0; index < moradores.blocoDois.length; index += 1) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}