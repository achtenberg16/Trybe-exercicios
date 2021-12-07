function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

//   testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

//   console.log(`${oddsAndEvens[5]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[4]},${oddsAndEvens[3]},${oddsAndEvens[0]}`); // será necessário alterar essa linha 😉



// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = n => {
    let fator = '1'
    for(let i = n; i > 0; i -= 1 ){
        fator = fator * i;
    }
    return fator
}
// console.log(fatorial(5))





// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu';

const compara = frase => {
    const separa = frase.split(' ');
    let maiorPalavra = "";
    for(index in separa){
       separa[index].length > maiorPalavra.length ? maiorPalavra = separa[index] : false;
       }
       console.log(maiorPalavra)
    }

compara("Antônio foi no banheiro e não sabemos o que aconteceu")