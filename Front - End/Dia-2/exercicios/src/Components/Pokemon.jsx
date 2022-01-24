import React, { Component } from 'react';
import '../style/pokemons.css';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon-card'>
        <p className='name'>{name}</p>
        <p className='type'>{type}</p>
        <p className='weight'>
          averageWeight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        <img className='PokemonImage' src={image} alt={name} />
      </div>
    );
  }
}
Pokemon.prototypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string,
};

export default Pokemon;
