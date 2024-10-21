import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="traza">TraceStory</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li> {/* Cambiado a Link */}
        <li><Link to="/vista2d">Vista 2D</Link></li> {/* Cambiado a Link */}
      </ul>
    </nav>
  );
}

export default Navbar;