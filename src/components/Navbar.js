import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Envolver TraceStory con Link para redirigir a la página de inicio */}
        <Link to="/">
          <h2 className="traza">TraceStory</h2>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li> 
        <li><Link to="/vista2d">Vista 2D</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;