const { combineReducers } = Redux


const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'Change':{
      return {
        ...state,
        meuSegundoReducer: {
        nome: action.nome,
        sobrenome: action.sobrenome,
        endereco: action.endereco,
        cidade: action.cidade
        }
      }
    } 
    default:
      return state;
  }
};

const reducerComb = combineReducers({meuPrimeiroReducer, meuSegundoReducer})

const store = Redux.createStore(reducerComb);
console.log(store.getState())

store.dispatch({
  type: 'Change',
  nome: 'Paulinho',
  sobrenome: 'Encrenca',
  endereco: 'Rua XYZ, 232',
  cidade: 'santo incomodo',
})

console.log(store.getState())