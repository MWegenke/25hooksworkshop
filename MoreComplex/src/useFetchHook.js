import { useState, useEffect } from 'react';

const useFetchHook = (url, context) => {
  let dataType;
  switch(context) {
    case 'info':
      dataType = {
        name: '',
        sprites: {front_default: ''}
      }
      break;
    case 'details':
      dataType = {
        evolution_chain: {url: ''},
        flavor_text_entries: [{flavor_text: ''}],
      }
      break;
    default:
      dataType = {results: []}
      break;
  }
  const [pokemon, setPokemon] = useState(dataType);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {setPokemon(data)})
  }, [url])
  return [pokemon, setPokemon]
}

export default useFetchHook;