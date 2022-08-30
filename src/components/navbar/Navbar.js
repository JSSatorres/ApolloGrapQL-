import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid border-bottom border-warning">
        <ul className="d-xl-flex navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-warning">
              Rick and Morty
              {/*   <img
                src="https://www.nicepng.com/png/detail/902-9026377_freetoedit-rick-morty-rickandmorty-shadow-wallpaper-rick-and.png"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              /> */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/episodes" className="nav-link text-warning">
              Episodes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/characters" className="nav-link text-warning me-auto">
              Characters
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
