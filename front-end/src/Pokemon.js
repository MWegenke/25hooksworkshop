import React, { useContext } from 'react';
import detailsContext from './detailsContext';

const Pokemon = (props) => {
  const pokeInfo = props.pokemon
  const { setDetails } = useContext(detailsContext);
  const handleClick = () => {
    setDetails(pokeInfo);
  }
  return (
    <div className='pokemon-sprite' onClick={handleClick}>
      <img src={pokeInfo.sprites.front_default} alt={pokeInfo.name} />
      <div>
        {`${pokeInfo.name[0].toUpperCase()}${pokeInfo.name.slice(1)}`}
      </div>
    </div>
  )
};

export default Pokemon;