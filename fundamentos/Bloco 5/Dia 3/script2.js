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

createDaysOfTheWeek()

function criaDia(dias) {

    for (let i = 0; i < dias.length; i += 1) {
        let pai = document.getElementById("days");
        let cria = document.createElement("li");
        cria.className = "day";
        cria.innerText = dias[i];
        if (dias[i] == 24 || dias[i] == 25 || dias[i] == 31) {
            cria.classList.add("holiday")
        }
        if (dias[i] == 4 || dias[i] == 11 || dias[i] == 18 || dias[i] == 25) { cria.classList.add("friday") }

        pai.appendChild(cria)
    }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

criaDia(dezDaysList)

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function criaButton(string) {
    let pai = document.querySelector("div.buttons-container");
    let cria = document.createElement("button");
    cria.innerText = string
    cria.id = "btn-holiday"
    pai.appendChild(cria)
}
criaButton("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
document.getElementById("btn-holiday").addEventListener("click", function () {
    let feriados = document.querySelectorAll(".holiday")
    for (index in feriados) {
        if (feriados[index].style.backgroundColor == "red") {
            feriados[index].style.backgroundColor = "rgb(238,238,238)"
        }
        else { feriados[index].style.backgroundColor = "red" }
    }
})

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function criaButton2(string) {
    let pai = document.querySelector("div.buttons-container");
    let cria = document.createElement("button");
    cria.innerText = string
    cria.id = "btn-friday"
    pai.appendChild(cria)
}
criaButton2("Sexta-feira")

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let friday = document.querySelectorAll(".friday");

document.getElementById("btn-friday").addEventListener("click", function () {

    for (index in friday) {
        if (friday[index] !== "sextou") { friday[index].innerText = "Sextou" }
    }
}
)

let dias = document.querySelectorAll(".day");
for (index in dias) {
    let dia = dias[index]
    dia.addEventListener("mouseover", zoom)

}

function zoom(Event) {
    let elemento = Event.target;
    elemento.style.fontsize = "30px"
}

