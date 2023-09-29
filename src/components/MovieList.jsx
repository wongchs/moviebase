import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movielist">
      <ul className="moviecard">
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={`http://img.omdbapi.com/?apikey=b096d6cb&i=${movie.imdbID}`}
                alt={movie.Title}
              />
              {movie.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
