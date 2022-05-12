const verifyNumber = require('../exercicio1');
const { expect } = require('chai');

describe('verifyNumber', () => {
  it("retorna negativo quando numero for menor que 0", () => {
    expect(verifyNumber(-1)).to.equal('negativo');
  })

  it("retorna positivo quando numero for maior que 0", () => {
    expect(verifyNumber('1')).to.be.equal('positivo');
  })

  it("retorna neutro quando numero for igual a 0", () => {
    expect(verifyNumber(0)).to.be.equal('neutro');
  })

  it("retorna erro quando não receber um numero", () => {
    expect(verifyNumber('teste').message).to.equal('Informe apenas números');
  })
}
)