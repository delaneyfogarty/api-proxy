import { useState } from 'react';
import Spinner from './Spinner';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [poke, setPokemon] = useState([]);
  const [pokeQuery, setPokeQuery] = useState('pikachu');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // set the loading state to true
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const netlifyRequest = await fetch(`/.netlify/functions/pokemon?pokemon=${poke}`);

    const data = await netlifyRequest.json();

    setIsLoading(false);
    setPokemon(data.data);
    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="pokemon">
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon
        <input value={pokeQuery} onChange={(e) => setPokeQuery(e.target.value)} />
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <button>Get pokemon</button>
      </form>
      <header>{isLoading ? <Spinner /> : <PokemonList poke={poke} />}</header>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
