import React, { useState, useEffect } from "react";

const MovieDetail = ({ imdbID }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = "b096d6cb";
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&r=json`
      );
      const data = await response.json();
      setMovieDetail(data);
    };

    fetchMovieDetail();
  }, [imdbID]);

  return (
    <div>
      {movieDetail && (
        <div>
          <h2>{movieDetail.Title}</h2>
          <p>{movieDetail.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
