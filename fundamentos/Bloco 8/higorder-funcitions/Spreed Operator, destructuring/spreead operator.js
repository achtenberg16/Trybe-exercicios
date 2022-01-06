// ele é usado para fazer uma copia de arrays, obejtos sem modificar o elemento original 
const names = ['pedro', 'paulo', 'brudo'];
const cores = ['rosa', 'cinza', 'verde'];

let copia = [...names, ...cores]
// console.log(copia)

copia = [...cores, ...names]
// console.log(copia);

copia = ['30', ...cores, 'ciano', ...names];
// console.log(copia)

const pessoa = {
 name: 'Bruno',
 idade: 30,
 pais: 'brasil'
};

const paises = {
    europa: 'espanha',
    asia: 'China'
}

const copiaObj = {
    ...pessoa,
    ano: 2021,
    ...paises
}
// console.log(copiaObj)

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); 

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5







// ---------------------------------FIXAÇÃO---------------------------
// ---------------------------------FIXAÇÃO---------------------------
// ---------------------------------FIXAÇÃO---------------------------
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['apple', 'orange', 'limon'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'water', 'juice'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};
console.log(fruitSalad(specialFruit, additionalItens));