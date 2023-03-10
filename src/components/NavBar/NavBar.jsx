import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
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
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'} to={'/categoria/comedias'} >Comedias</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'}to={'/categoria/romanticas'}>Románticas</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'}to={'/categoria/drama'}>Drama</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'}to={'/categoria/documentales'}>Documentales</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'}to={'/categoria/series'}>Series</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-dark text-warning' : 'btn btn-danger'}to={'/categoria/suspenso'}>Suspenso</NavLink>
        

        <nav>
        <Link to="/cart"><CartWidget /></Link>
        
        </nav>
      </ul>
    </div>
  );
}

export default NavBar;
