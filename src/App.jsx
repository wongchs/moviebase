import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("Batman");
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
    <Router>
      <div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        {error && <p className="error">{error}</p>}
        <Routes>
          <Route path="/" element={<MovieList movies={movieData} />} />
          <Route path="/movies" element={<MovieList movies={movieData} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
