import React, { useContext } from 'react';
import useFetchHook from './useFetchHook';
import detailsContext from './detailsContext.js'


const PokemonDetails = (props) => {
  const [pokeDetails] = useFetchHook(props.details.species.url, 'details')
  const { setDetails } = useContext(detailsContext)
  return (
    <div id='pokemon-details'>
      <button onClick={() => { setDetails({}) }}>Go Back to List</button>
      <h2>{`${props.details.name[0].toUpperCase()}${props.details.name.slice(1)}`}</h2>
      <div id='img-and-details'>
        <div id='img-container'>
          <img src={props.details.sprites.front_default} alt={props.details.name} />
        </div>
        <div id='details'>
          <div id='flavor'>{pokeDetails.flavor_text_entries[0].flavor_text}</div>
          <div id='types'>Types: {props.details.types.map(type => `${type.type.name[0].toUpperCase()}${type.type.name.slice(1)} `)}</div>
          <div id='height-and-weight'>Height: {Math.round(props.details.height * 3.97)} inches Weight: {Math.round(props.details.weight / 4.536)} lbs</div>
          <div id='stats'>Base Stats: {props.details.stats.map(stat => `${stat.stat.name}: ${stat.base_stat} `)}</div>
        </div>
      </div>
      <div id='moves'>
        <h5>Moves</h5>
       <ul>
         {props.details.moves.map((move, index) => <li key={index}>{`${move.move.name[0].toUpperCase()}${move.move.name.slice(1)}`}</li>)}
       </ul>
      </div>
    </div>
  )
};

export default PokemonDetails;