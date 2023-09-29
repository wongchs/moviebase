import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "b096d6cb";
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&r=json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.Search) {
          setMovieData(data.Search.slice(0, 10));
          setError(null);
        } else {
          setMovieData([]);
          setError("No movies found.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    if (query.trim() !== "") {
      fetchMovies();
    } else {
      setMovieData([]);
      setError(null);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleInputChange}
      />
      {error && <p>{error}</p>}
      <MovieList movies={movieData} />
    </div>
  );
};

export default App;
