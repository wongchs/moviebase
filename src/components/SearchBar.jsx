import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    navigate("/movies");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-btn" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
