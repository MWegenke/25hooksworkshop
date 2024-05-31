import React, { useState, useEffect }  from 'react'
import PokemonThumbnail from './components/PokemonThumbnail';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon');

  const getAllPokemon = async() =>{
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next)
//refactor this function to use loadMore
    function createPokemonObject (result) {
      result.map(async (pokemon) => {
        const res = await fetch(`${loadMore}/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])

        
      });
      console.log(allPokemons)
    }

    createPokemonObject(data.results);
  }

  
  useEffect(() => {
  getAllPokemon()
  }, [])
  
  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map(pokemon => 
          <PokemonThumbnail 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={pokemon.id}
          />
          )}
        </div>
        <button className="load-more" onClick={() => getAllPokemon()}>LOAD MORE</button>
      </div>
    </div>
  );
}

export default App;
