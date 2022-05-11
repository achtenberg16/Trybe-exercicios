const fs = require('fs').promises;

// fs.readFile("simpsons.json", "utf8")
//     .then(response => JSON.parse(response))
//     .then(result => {
//       result.forEach(({id, name}) => {
//         console.log(`${id} - ${name}`);
//       });
//     })
//     .catch(err => {console.log(err)});

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

function getPersonagem(id) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile("simpsons.json", "utf8")
      .then(response => JSON.parse(response))
      .then(result => {
        const personagem = result.find(personagem => id === +personagem.id);
        if (!personagem) reject(new Error("id não encontrado"));
        return resolve(personagem);
      })
  })
  return promise
}



async function getSimpsons(id) {
  try {
    const personagem = await getPersonagem(id);
    console.log(personagem.name);
  }
  catch (err) {
    console.log(err.message);
  }
}

getSimpsons(1);
getSimpsons(2455);