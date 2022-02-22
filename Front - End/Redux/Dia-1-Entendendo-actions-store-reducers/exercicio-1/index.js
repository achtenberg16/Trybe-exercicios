const prevButton = document.getElementById('previous');
const nexButton = document.getElementById('next');
const color = document.getElementById('value');
const random = document.getElementById('random')

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NewColor = (color) => ({
  type: 'New_Color',
  color
})

const increment = () => ({
  type: 'NEXT_COLOR'
})

const decrement = () => ({
  type: 'PREVIOUS_COLOR'
})

const reducer = (state = ESTADO_INICIAL, action) => {
 switch(action.type) {
   case 'NEXT_COLOR':
    return {
      ...state,
      index: (state.index + 1) % state.colors.length,
      }
    case 'PREVIOUS_COLOR': {
      return {
        ...state,
        index: (state.index === 0) ? state.colors.length - 1 : state.index - 1
      }
    }
    case 'New_Color': {
      return {
        colors: [...state.colors, action.color],
        index: state.colors.length
      }
    }
    default: return state
 }
}

const store = Redux.createStore(reducer);


prevButton.addEventListener('click', () => {
  store.dispatch(decrement());
  setColor()
})

nexButton.addEventListener('click', () => {
  store.dispatch(increment());
  setColor()
})

const updateColor = () => {
  const {colors, index} = store.getState()
  return colors[index]
}

const setColor = () => {
  const result = updateColor();
  color.innerText = result
  document.body.style.backgroundColor = result
}

function generateRandomColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const addNewColor = () => {
  store.dispatch(NewColor(generateRandomColor()))
}
 
random.addEventListener('click',() =>{ addNewColor(), 
  setColor()})

window.onload = setColor