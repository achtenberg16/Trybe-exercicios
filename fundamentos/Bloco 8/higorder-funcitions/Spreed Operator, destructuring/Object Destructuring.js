const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

//   A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:
// 

// Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:

// const {name, seller} = product
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log() , para isso, vamos utilizar a desestruturação de objetos:
// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//   Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por : , segue a sintaxe: homeWorld: { name: planetName } . Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld .
// Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:

// As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

//   Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas



//   fixação ---------------
//   fixação ---------------
//   fixação ---------------
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const cp = {
      ...user,
      ...jobInfos
  }

  const {name, age, nationality, profession, squad, squadInitials} = cp;

  console.log(`Hy, my name is ${name}, I'Am ${age} years old and I'Am ${nationality}. I work as a ${profession} my suqaad is ${squadInitials}-${squad}`)