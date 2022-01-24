import React from 'react';
import Header from './Components/Header';
import Pokedex from './Components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <>
        <Header title='Pokemons'></Header>
        <Pokedex pokemons={pokemons}></Pokedex>
      </>
    );
  }
}

export default App;
