function addEmployee(id, firstName, lastName, managers, responsibleFor = 0) {
    const create = { id, firstName, lastName, managers}
    if(!Array.isArray(responsibleFor)){create.responsibleFor =[responsibleFor]}
    else{create.responsibleFor = responsibleFor}
    console.log(create)
  }

(addEmployee('41', 'ana', 'lest',
[
  '48',
  '51',
],

))