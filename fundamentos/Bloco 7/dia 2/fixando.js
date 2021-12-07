const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };


  const exibir = objeto =>{
      let objet = objeto;
   
      for(index in objet){
          console.log(`${index}, Nível:${objet[index]}`)
      }
  }
  exibir(student2)