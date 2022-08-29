import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid border-bottom border-warning">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/" className="nav-link">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
      </div>
    </nav>
  );
};

export default Navbar;
