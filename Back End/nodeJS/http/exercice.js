const express = require("express");
const cors = require("cors");
const { readFile, writeFile } = require('./utils');

const app = express();
app.use(cors());
app.use(express.json());


app.listen('3000', () => {
  console.log('escutando na porta 3000');
})

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, resp) => {
  resp.status('200').json({ message: 'pong' });
})

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
app.post('/hello', (req, resp) => {
  const { name } = req.body;
  resp.status('200').json({ message: `Hello, ${name}!` });
})


// Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.

app.post('/greetings', (req, resp) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) > 17) {
    resp.status('200').json({ message: `Hello, ${name}!` });
  }
  resp.status(401).json({ message: 'Unauthorized' });
})

// Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req, resp) => {
  const { name, age } = req.params;
  resp.status('200').json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})


// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', (req, resp) => {
const personagens = JSON.parse((readFile('./simpsons.json')));
console.log(personagens);
resp.status(200).json(personagens);
})

// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
app.get('/simpsons/:id', (req, resp) => {
  const { id } = req.params;
  const personagens = JSON.parse((readFile('./simpsons.json')));
  const personagemEscolhido = personagens.find( personagem => +personagem.id === +id);

  if(personagemEscolhido) {
    resp.status(200).json(personagemEscolhido);
    return;
  }
  resp.status(404).json({ message: 'simpson not found' });
})


// Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.

app.post('/simpsons', (req, resp) => {
 const { id, name } = req.body
  const personagens = JSON.parse((readFile('./simpsons.json')));
  const personagemExiste = personagens.some( personagem => +personagem.id === +id);

  if(personagemExiste) {
    resp.status(409).json({ message: 'id already exists' });
    return;
  }
  personagens.push({ id, name });

  writeFile('./simpsons.json', JSON.stringify(personagens));

  resp.status(204).end();
  })