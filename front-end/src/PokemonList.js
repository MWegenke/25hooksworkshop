import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  return (
    <div id='pokemon-list'>
      {props.pokemon.map((pokemon, index) => <Pokemon key={index} pokemon={ pokemon }/>)}
    </div>
  )
};

export default PokemonList;