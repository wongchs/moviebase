import React, { useState, useEffect } from "react";

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(movies.slice(0, 10));
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
