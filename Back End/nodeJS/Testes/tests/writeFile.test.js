const { expect } = require('chai');

describe('writeFile', () => {
 it('testa se é possivel escrever em um arquivo', () => {
    expect(writeFile('teste.txt', 'teste')).to.be.equal('ok');
 })
 it('testa se um erro é retornado ao não passar um dos paremetros', () => {
   expect(writeFile('teste.txt')).to.be.equal('erro, foneça a mensagem');
 })
})