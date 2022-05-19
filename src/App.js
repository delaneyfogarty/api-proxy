import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
// eslint-disable-next-line no-unused-vars
import WeatherSearch from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      {/* stretch goal: <WeatherSearch /> */}
    </div>
  );
}

export default App;
