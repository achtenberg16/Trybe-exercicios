// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function append (string) {
  let cria = document.createElement('li');
  cria.innerText = string;
  document.body.appendChild(cria)

}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

 return  fetch(API_URL, myObject)
};

function append (frase) {
const element =  document.createElement('p');
element.innerText = frase;
document.body.appendChild(element)
}

async function mostra () {
 const retorno = await fetchJoke();
 const tratado = await retorno.json();
 append(tratado.joke)
}

window.onload = () => mostra();