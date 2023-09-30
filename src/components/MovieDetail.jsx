import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = "b096d6cb";
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&r=json`
      );
      const data = await response.json();
      setMovieDetail(data);
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <div>
      {movieDetail && (
        <div className="movie-detail">
          <img
            src={`http://img.omdbapi.com/?apikey=b096d6cb&i=${movieDetail.imdbID}`}
            alt={movieDetail.Title}
          />
          <h2>
            {movieDetail.Title} ({movieDetail.Year})
          </h2>
          <div className="details">
            <p>
              <strong>Genre:</strong> {movieDetail.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movieDetail.Director}
            </p>
            <p>
              <strong>Plot:</strong> {movieDetail.Plot}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
