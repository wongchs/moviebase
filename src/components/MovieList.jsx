import React, { useState, useEffect } from 'react';

const MovieList = ({ movies }) => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'b096d6cb';
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=${apiKey}&s=${movies}&r=json`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.Search) {
                    setMovieData(data.Search.slice(0, 10));
                } else {
                    setMovieData([]);
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchMovies();
    }, [movies]);

    return (
        <div>
            <ul>
                {movieData.map((movie) => (
                    <li key={movie.imdbID}>{movie.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
