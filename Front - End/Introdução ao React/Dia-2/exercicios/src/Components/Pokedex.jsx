import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../style/pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className='container-pokemons'>
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index} unitPokemon={pokemon}></Pokemon>
        ))}
      </section>
    );
  }
}

export default Pokedex;
