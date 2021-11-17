// Crie um irmão para elementoOndeVoceEsta .
let pai = document.querySelector("#pai");
let criarIrmao = document.createElement("section");
pai.appendChild(criarIrmao)

// Crie um filho para elementoOndeVoceEsta .
let ondeEsta = document.querySelector("#elementoOndeVoceEsta");
let criarFilho1 = document.createElement("p");
criarFilho1.innerText = "olá teste";
ondeEsta.appendChild(criarFilho1);

// Crie um filho para primeiroFilhoDoFilho .
let FirtChild = ondeEsta.firstElementChild;
let criarFilho2 = document.createElement("p");
criarFilho2.innerText = "criando segundo filho"; criarFilho2.style.color = "pink";
FirtChild.appendChild(criarFilho2);

// A partir desse filho criado, acesse terceiroFilho
let criado = FirtChild.lastElementChild;
let acessando = criado.parentElement.parentElement.nextElementSibling