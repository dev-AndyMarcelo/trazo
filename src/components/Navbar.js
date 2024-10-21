// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="traza">Trazabilidad</h2>
      </div>
      <ul className="nav-links">
        {/* Utilizamos etiaquetas <a> en lugar de Link */}
        <li><a href="/">Inicio</a></li>
        <li><a href="/vista2d">Vista 2D</a></li>
        {/* <li><a href="/informacion">Información</a></li> */}
      </ul>
      {/* <button className="login-btn">Login</button> */}
    </nav>
  );
}

export default Navbar;