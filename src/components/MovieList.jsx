import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movielist">
      <ul className="moviecard">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={`http://img.omdbapi.com/?apikey=b096d6cb&i=${movie.imdbID}`}
                alt={movie.Title}
              />
              <div className="overlay"></div>
              <h2 className="movie-title">{movie.Title}</h2>
              <div className="year">{movie.Year}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
