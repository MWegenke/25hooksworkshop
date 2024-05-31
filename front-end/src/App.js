import React, { useState, useEffect } from 'react';
import useFetchHook from './useFetchHook';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails'
import detailsContext from './detailsContext';
import './App.css';
import spinner from './loading.gif';

const App = () => {
  const [pokemon] = useFetchHook('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const [details, setDetails] = useState({});
  const value = { details, setDetails };
  const [ pokeInfo, setPokeInfo ] = useState([])
  let renderElement;
  useEffect(() => {
    const promises = pokemon.results.map(poke => fetch(poke.url)
      .then(res => res.json())
    )
    Promise.all(promises).then(data => setPokeInfo(data))
  }, [pokemon])

  if (Object.keys(details).length === 0) {
    if(pokeInfo.length) {
      renderElement = <PokemonList pokemon={ pokeInfo } />
    } else {
      renderElement = <img id='spinner' src={spinner} alt="loading"/>
    }
  } else {
    renderElement = <PokemonDetails details={ details }/>
  }
  return (
    <detailsContext.Provider value={value}>
      <h1>Pokedex Generation 1</h1>
      <div id='App'>
        {renderElement}
      </div>
    </detailsContext.Provider>
  )
}

export default App;
