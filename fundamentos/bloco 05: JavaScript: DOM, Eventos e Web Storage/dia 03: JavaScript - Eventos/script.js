function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* Exercicio 01 */

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listaDias = document.getElementById("days")
function criarDias() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dias = decemberDaysList[index];
    let li = document.createElement('li');
    li.innerHTML = dias;
    li.classList.add("day")
    if (dias === 24 || dias === 25 || dias === 31) {
      li.classList.add("holiday")
    }
    if (dias === 4 || dias === 11 || dias === 18 || dias === 25) {
      li.classList.add("friday")
    }

    listaDias.appendChild(li);
  }
}
criarDias()

/* Exercicio 02 */

function criarBotao(nomeBotao) {
  let divDoBotao = document.querySelector('.buttons-container');
  let botao = document.createElement("button")

  botao.id = "btn-holiday"
  botao.innerHTML = nomeBotao;

  divDoBotao.appendChild(botao)
}
criarBotao("Feriados")

/* Exercicio 03 */

function mudaCor() {
  let diasFeriados = document.getElementsByClassName("holiday")
  let botaoFeriado = document.getElementById("btn-holiday")
  let corDefundo = "rgb(238,238,238)";
  let novaCor = "white"

  botaoFeriado.addEventListener("click", cores)
  function cores() {
    for (let index = 0; index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].style.backgroundColor === novaCor) {
        diasFeriados[index].style.backgroundColor = corDefundo;
      } else {
        diasFeriados[index].style.backgroundColor = novaCor;
      }
    }
  }
}
mudaCor()

/* Exercicio 04 */

function criarBotaoSextaFeria(nomeBotao) {
  let divDoBotao = document.querySelector('.buttons-container');
  let botao = document.createElement("button")

  botao.id = "btn-friday"
  botao.innerHTML = nomeBotao;

  divDoBotao.appendChild(botao)
}
criarBotaoSextaFeria("Sexta-feira")

/* Exercicio 05 */

function mudaTexto(sexta) {
  let diasSextaFeira = document.getElementsByClassName("friday")
  botaoSextaFeira = document.getElementById("btn-friday")
  let novoTexto = "Sextou!"

  botaoSextaFeira.addEventListener("click", texto)
  function texto() {
    for (let index = 0; index < diasSextaFeira.length; index += 1) {
      if (diasSextaFeira[index].innerHTML === novoTexto) {
        diasSextaFeira[index].innerHTML = sexta[index];
      } else {
        diasSextaFeira[index].innerHTML = novoTexto;
      }
    }
  }
}
let decemberFridays = [4, 11, 18, 25];
mudaTexto(decemberFridays)

/* Exercicio 06 */

function efeitoZoom() {
  diasDoMes = document.getElementById("days")
  diasDoMes.addEventListener("mouseover", zoom)
  function zoom(evento) {
    evento.target.style.fontSize = "30px";
    evento.target.style.fontWeight = "600"
  }

}

function semZoom() {
  diasDoMes = document.getElementById("days")
  diasDoMes.addEventListener("mouseout", naoZoom)
  function naoZoom(evento) {
    evento.target.style.fontSize = "20px";
    evento.target.style.fontWeight = "200";
  }
}

efeitoZoom()
semZoom()

/* Exercicio 07 */

function addTarefa(novaTarefa) {
  let divDaTarefa = document.querySelector(".my-tasks");
  let span = document.createElement("span")
  span.innerHTML = novaTarefa
  divDaTarefa.appendChild(span)
}
addTarefa("Cozinhar")

/* Exercicio 08 */

function legendaCor(cor) {
  let divDaTarefa = document.querySelector(".my-tasks");
  let div = document.createElement("div")
  div.style.backgroundColor = cor
  div.classList.add("task")

  divDaTarefa.appendChild(div)
}
legendaCor("green")

/* Exercicio 09 */

function selectTarefa() {
  let divTarefa = document.getElementsByClassName("task");
  for (let index = 0; index < divTarefa.length; index += 1) {
    divTarefa[index].addEventListener("click", function () {
      if (divTarefa[index].className === "task") {
        divTarefa[index].classList.add("task-select")
      } else if (divTarefa[index].className !== "task-select") {
        divTarefa[index].classList.remove("task-select")
      }
    })
  }
}
selectTarefa()

/* Exercicio 10 */

function diaTarefa() {
  let divDias = document.getElementById("days")
  let divTarefa = document.getElementsByClassName("task-select");
  let divTask = document.querySelector('.task');
  let taskColor = divTask.style.backgroundColor;

  divDias.addEventListener("click", function (evento) {
    let corEventoAlvo = evento.target.style.color;
    if (divTarefa.length > 0 && corEventoAlvo !== taskColor) {
      let color = divTarefa[0].style.backgroundColor;
      evento.target.style.color = color
    } else if (corEventoAlvo === taskColor) {
      evento.target.style.color = "rgb(119,119,119)";
    }
  })
}

diaTarefa()

/* Exercicio bonus */

function listaCompromissos() {
  let caixaInput = document.querySelector('#task-input');
  let botaoInput = document.querySelector('#btn-add');
  let ulCompromissos = document.querySelector('.task-list');

  botaoInput.addEventListener("click", function () {
    if (caixaInput.value.length > 0) {
      let novaLi = document.createElement("li");
      novaLi.innerText = caixaInput.value;

      ulCompromissos.appendChild(novaLi);
      caixaInput.value = "";
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  })

  caixaInput.addEventListener("keyup", function (evento) {
    if (evento.key === "Enter" && caixaInput.value.length > 0) {
      let novaLi = document.createElement("li");
      novaLi.innerText = caixaInput.value;

      ulCompromissos.appendChild(novaLi);
      caixaInput.value = "";
    }
  })
}

listaCompromissos();