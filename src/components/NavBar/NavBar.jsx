import React from "react";
import "./NavBar.css";
import CartWidget from "../../components/CartWidget/CartWidget";
import Header from "../../components/Header/Header";

function NavBar(props) {
  return (
    <div>
      <div>
        <Header />
        <div className="navSearch">
          <nav className="navbar navbar-expand-lg .bg-secondary.bg-gradient">
            <form class="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Qué estás buscando?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>

      <ul className="nav">
        <a href="#">Comedias</a>
        <a href="#">Románticas</a>
        <a href="#">Drama</a>
        <a href="#">Documentales</a>
        <a href="#">Series</a>
        <a href="#">Suspenso</a>
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar;
