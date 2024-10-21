import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleBuscarClick = () => {
    if (codigo) {
      navigate(`/vista2d/${codigo}`); // Redirigir a Vista2D con el código ingresado
    } else {
      alert("Por favor, ingresa un código.");
    }
  };

  return (
    <div className="homepage">
      <div className="homepage-left">
        <img src="./imagenes/logo.png" alt="Alpaca Tech Logo" className="logo" />
        <h1>
          Conoce la historia detrás <br /> de <span>cada producto</span>
        </h1>
        <p>Descubre la historia y procedencia detrás de cada prenda con trazabilidad en Blockchain.</p>
        <div className="input-container">
          <input 
            type="text" 
            value={codigo}
            onChange={handleCodigoChange} 
            placeholder="Ingresa tu código" 
          />
          <button onClick={handleBuscarClick}>Buscar</button>
        </div>
      </div>

      <div className="homepage-right">
        <img src="./imagenes/traza-imagen.png" alt="Prendas" className="prendas-image" />
      </div>
    </div>
  );
};

export default HomePage;
