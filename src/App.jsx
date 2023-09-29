import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async (searchQuery) => {
      try {
        const apiKey = "b096d6cb";
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}&r=json`
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

    fetchMovies(query);
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movieData} />
    </div>
  );
};

export default App;
