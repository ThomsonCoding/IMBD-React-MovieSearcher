import { useState } from 'react';

import classes from './movie-searcher.module.css';

const MovieSearcher = (props) => {

    const [enteredFilm, setEnteredFilm] = useState("");

    const Fetch = async function(enteredFilm) {
        const response = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${enteredFilm}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "5234edaf1bmshbb59c8cbccb6de2p11d75cjsnac08e79fe865"
        }
    })
        const data = await response.json();
    
        return data;
    };

    const handleFilmSearch = async (event) =>  {
        event.preventDefault(); 
        Fetch().then(response => {props.onChange(response) && setEnteredFilm(response)})
    }

    const updateSearch = (event) => {
        setEnteredFilm(event.target.value);
        console.log(enteredFilm);
    }

    return (
        <form onSubmit={handleFilmSearch} className={classes.search__header}>
            <input type="text" onChange={updateSearch} placeholder="Type something..." id="filmname"/>
            <p className={classes.trending__text}>Trending...</p>
        </form>
    )
};

export default MovieSearcher;