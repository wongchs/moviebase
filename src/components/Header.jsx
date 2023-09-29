import React from "react";
import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

const Header = () => {
  return (
    <header className="title">
      <Link to="/">
        <FaFilm size={28} className="icon" />
        <h1>MovieBase</h1>
      </Link>
    </header>
  );
};

export default Header;
