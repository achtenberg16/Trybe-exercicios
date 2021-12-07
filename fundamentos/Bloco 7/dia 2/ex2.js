const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  const adiciona = elemento => {
      elemento.turno = 'noite';
  }


const mostra = elemento => {
  const keys = Object.keys(elemento)
  return console.log(keys)
}
// mostra(lesson3)


const tamnho = objeto => {
    console.log(objeto.lenght)
}
// tamnho(lesson2)

// ex 04
const valor = elemento => {
    let valores = Object.values(elemento);
    for(index in valores){
        console.log(valores[index])
    }
}
// valor(lesson2)

function novoObj(objeto, objeto2, objeto3){
    const novo = Object.assign({objeto}, {objeto2}, {objeto3})
    return novo
}

let objetoNovo = novoObj(lesson1, lesson2, lesson3);

function somaAlunos (objeto){
  let keys = Object.keys(objeto);
  let total = 0;
  for(index of keys){
    console.log(index)
    total += objeto[index].numeroEstudantes;
  }
  console.log(`o total de alunos é ${total}`)
}

// somaAlunos(objetoNovo)


const valorChave = (lesson1, index) => {
  let valor = Object.values(lesson1);
  return(console.log(`saida: ${valor[index]}`))
}

valorChave(lesson1, 2);


const confere = (parametro, key, valor) =>{
  if(parametro[key] === valor){
     return true
  }
  else{
    return false
  }
}

// console.log(confere(lesson1, 'turno', 'noite'))

function somaAlunos2 (objeto){
  let keys = Object.keys(objeto);
  let soma = 0
  for(prop of keys){
    if(objeto[prop].materia === 'Matemática'){
     soma += objeto[prop].numeroEstudantes;
    }
  }
  return soma
}
console.log(somaAlunos2(objetoNovo))