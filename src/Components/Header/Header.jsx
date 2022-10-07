import React from "react";
import download from "../../download.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <nav className="header">
      <img src={download} alt="logo" />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/myList">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
