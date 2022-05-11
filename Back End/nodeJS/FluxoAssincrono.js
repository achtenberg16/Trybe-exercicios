// const fs = require('fs');

// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

// console.log('testa antes')

// const fs = require('fs');

// fs.readFile('file1.txt', (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('file2.txt', (err, file2Content) => {
//     if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//     console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//     fs.readFile('file3.txt', (err, file3Content) => {
//       if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//       console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
//     });
//   });
// });

function dividirNumeros1(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

// try {
//   const resultado = dividirNumeros(2, 1);
//   console.log(`resultado: ${resultado}`);
// } catch (e) {
//   console.log(e.message);
// }

function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

console.log("segundo", dividirNumeros1(2, 1))

