// Essa desestruturação funciona? E se funciona, qual o valor que aparece se fizer console.log(nationality) ? Copie esse código e teste você mesmo. 😉
// Como vimos nas sessões anteriores, quando tentamos acessar uma propriedade que não existe, como nationality , o valor retornado é undefined . E se você quisesse dar um valor padrão para nationality , caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring , que é mais um recurso do ES6:

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian



const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0



// fixação
// fixação
// fixação
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};


const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));