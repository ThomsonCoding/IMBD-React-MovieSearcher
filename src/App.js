import './App.css';
import MovieSearcher from './components/movie-searcher';
import TrendingMovies from './components/trending-movies';
import RecentSearch from './components/recent-search';

import { useState } from 'react';

function App() {

  const [enteredFilmFromChild, setEnteredFilmFromChild] = useState("");
  console.log(enteredFilmFromChild);

  return (
    <>
      <MovieSearcher onChange={(value) => {setEnteredFilmFromChild(value)}} />
      <TrendingMovies />
      <RecentSearch searchResults={enteredFilmFromChild}/>
    </>
  );
}

export default App;
