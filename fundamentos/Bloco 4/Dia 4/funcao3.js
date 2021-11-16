// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function menorValor(numeros){
    let menor = 0;
    for(index in numeros){
        if(numeros[menor] < numeros[index]){
     menor = index
    }
    }   
    return menor
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))