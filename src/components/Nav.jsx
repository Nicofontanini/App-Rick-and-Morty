import React from 'react';
import SearchBar from './SearchBar';
import styledNav from './Nav.module.css';
import { NavLink } from "react-router-dom";


export default function Nav({ onSearch, handleLogout, Favorites }) {



  return (
    <nav className={styledNav.navContainer}>
      <NavLink to="/home">
        <button className={styledNav.botonHome}>Home</button>
      </NavLink>
      <NavLink to="/Favorites">
        <button className={styledNav.botonFavorites} onClick={Favorites}>Favoritos</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styledNav.botonAbout}>About</button>
      </NavLink>
      <NavLink to="/">
        <button className={styledNav.botonLogout} onClick={handleLogout}>Log out</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </nav>
  )
}
