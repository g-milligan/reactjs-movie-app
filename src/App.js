
// API Key: a92392c2
import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_KEY = 'a92392c2';

const movie1 = {
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett, Andy Lanning",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "757,026",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "10 Jul 2017",
    "BoxOffice": "$389,813,101",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
};


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const searchTerm = title ? `&s=${title}` : '';
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}${searchTerm}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(searchTerm);
    }, []);


    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder='search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={(e) => {if (e.key === 'Enter') { searchMovies(searchTerm) }}}
            />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => <MovieCard movie1={movie} />)}
                        </div>
                    )
                    : (
                        <div className='empty'>
                            </div>
                    )
            }

            
        </div>
    );
};

export default App;