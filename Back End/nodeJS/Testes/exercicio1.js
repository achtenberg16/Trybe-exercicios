function verifyNumber (number) {
  if (+number === 0) return 'neutro';
  else if (+number < 0) return "negativo";
  else if (+number > 0) return "positivo";
  return new Error('Informe apenas números');
}


module.exports = verifyNumber;