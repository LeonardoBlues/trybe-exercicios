let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* Exercicio 01 */

console.log("Bem vinda, " + info.personagem);

/* Exercicio 02 */

info["recorrente"] = "Sim";
console.log(info);

/* Exercicio 03 */

for (chave in info){
    console.log(chave);
}

/* Exercicio 04 */

for (valor in info){
    console.log(info[valor]);
}

/* Exercicio 05 */

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
}

for (let valor in info){
    if ( 
        valor === "recorrente" &&
        info[valor] === "Sim" &&
        info2[valor] === "Sim"
    ) {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[valor] + " e " + info2[valor]);
    }
}

/* Exercicio 06 */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

/* Exercicio 07 */

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

console.log(leitor);

/* Exercicio 08 */

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");