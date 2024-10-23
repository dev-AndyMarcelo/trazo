import React from 'react';
import { NavLink } from 'react-router-dom'; // Importar NavLink en lugar de Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink exact to="/" className="nav-logo" activeClassName="active">
          <h2 className="traza">TraceStory</h2>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/vista2d" className="nav-link" activeClassName="active">Vista 2D</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;