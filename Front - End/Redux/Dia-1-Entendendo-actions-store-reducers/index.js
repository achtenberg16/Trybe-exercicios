const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email
})

const ESTADO_INICIAL ={login: false, email: ''}

const reducer = (state = ESTADO_INICIAL, action) =>{
  console.log(state)
  console.log(action)
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email
      }
    default: 
      return state
  }
 };

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('email.com.br'))
// console.log(store.getState());




