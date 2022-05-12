const fs = require('fs')

const readFile = (arquivo) => {
  return fs.readFileSync(arquivo, 'utf-8')
}

const writeFile = (arquivo, conteudo) => {
  return fs.writeFileSync(arquivo, conteudo)
}

module.exports = { readFile, writeFile }