// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function comparador(nomes){
let menor = 0;
for(index in nomes){
  if(nomes[menor].length < nomes[index].length){menor = index}
}
return nomes[menor]
}

console.log(comparador(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
