import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div>
      <ul className="nav">
        <a href="#">Comedias</a>
        <a href="#">Románticas</a>
        <a href="#">Drama</a>
        <a href="#">Documentales</a>
        <a href="#">Series</a>
        <a href="#">Suspenso</a>
      </ul>
      <div className="navSearch">
        <nav className="navbar navbar-expand-lg .bg-secondary.bg-gradient">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
