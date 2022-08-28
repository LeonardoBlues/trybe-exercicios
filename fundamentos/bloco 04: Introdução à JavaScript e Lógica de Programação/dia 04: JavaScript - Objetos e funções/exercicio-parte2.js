/* Exercicio 01 */

function verificaPalindrome(palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    } else {
      return false;
    }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

/* Exercicio 02 */

function maiorIndice(numeros) {
    let maior = 0;
    for (let index in numeros){
        if (numeros[maior] < numeros[index]){
            maior = index;
        }
    }
    return maior;
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

/* Exercicio 03 */

function menorIndice(numeros) {
    let menor = 0;
    for (let index in numeros){
        if (numeros[menor] > numeros[index]){
            menor = index;
        }
    }
    return menor;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));


/* Exercicio 04 */

function maiorNome(nomes) {
    let palavraMaior = nomes[0];
    for (let index in nomes) {
        if (palavraMaior.length < nomes[index].length) {
            palavraMaior = nomes[index];
        }  
    }
    return palavraMaior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* Exercicio 05 */

function maisRepetido(numeros){
    let repetido = 0
    let repetindo = 0
    let indexRepetido = 0

    for (let index in numeros){
        let verNumero = numeros[index];
        for ( let index2 in numeros){
            if (verNumero === numeros[index2]) {
                repetindo += 1;
            }
        }
        if (repetindo > repetido){
            repetido = repetindo;
            indexRepetido = index
        }
        repetindo = 0;
    }
    return numeros[indexRepetido]
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

/* Exercicio 06 */

function somatoria(numero) {
    let total = 0;
    for (let index = 1; index <= numero; index += 1){
        total+= index;
    }
    return total;
}

console.log(somatoria(5));

/* Exercicio 07 */

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let eIgual;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        eIgual = false;
        break;
      } else {
        eIgual = true;
      }
    }
    return eIgual;
}

  console.log(verificaFimPalavra('trybe', 'be'));
  console.log(verificaFimPalavra('joaofernando', 'fernan'));