import React from "react";
import { FaFilm } from "react-icons/fa";

const Header = () => {
  return (
    <header className="title">
        <FaFilm size={28} className="icon" />
      <h1>MovieBase</h1>
    </header>
  );
};

export default Header;
