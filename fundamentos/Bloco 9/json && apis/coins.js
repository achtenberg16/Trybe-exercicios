const urlA = 'https://api.coincap.io/v2/assets'
function promisseFecth(){
     return  fetch(urlA)
}

const find = (name, arr ) => {
 return arr.find((elemento) => elemento.id === name)
}

function append (obj) {
 const elemento = document.createElement('p');
 elemento.innerText = `Nome da moeda: ${obj.id}, simbolo: ${obj.symbol},Preço em dolar: ${obj.priceUsd}`;
 document.body.appendChild(elemento)
}


function filterTen(arr) {
    return arr.filter((elemento) => elemento.rank <= 10 )
}

async function tratament () {
 const retorno = await promisseFecth();
  const retornoObj = await retorno.json();
  const moedas = filterTen(retornoObj.data)
  moedas.map((moeda) => append(moeda))

};


window.onload = tratament();