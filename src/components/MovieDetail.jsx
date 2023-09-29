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
        <div>
          <h2>{movieDetail.Title}</h2>
          <p>{movieDetail.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
