const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
let listas = document.querySelectorAll("li")[1];
listas.addEventListener("click", adicionaClasse)

function adicionaClasse(evenntoOrigem) {
    listas.classList.add("tech")
    console.log("adicionado")
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let classesTeam = document.querySelectorAll(".tech");

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("change", mudaTexto)

function mudaTexto() {
    let valor = input.value
    let elemento = document.getElementsByClassName("tech")[0];
    elemento.innerText = valor
}


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener("dblclick", redireciona)

function redireciona() {
    window.location.href = "https://www.linkedin.com/in/alessandro-achtenberg-a107a4213/";

}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener("mouseover", mudacor)
myWebpage.addEventListener("mouseleave", resetacor)
function mudacor(p1) {
    let objeto = p1.target;
    objeto.style.color = "red";
    objeto.style.fontsize = "35px"
}
function resetacor(p1) {
    let objeto = p1.target;
    objeto.style.color = "green"
}


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.