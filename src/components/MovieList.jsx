import React from "react";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movielist">
      <ul className="moviecard">
        {movies.map((movie) => (
          <li key={movie.imdbID} onClick={() => onMovieClick(movie.imdbID)}>
            {movie.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
