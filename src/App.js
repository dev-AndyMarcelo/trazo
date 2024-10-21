// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Elimina 'useNavigate'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Vista2D from './components/Vista2d';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vista2d/:codigo?" element={<Vista2D />} /> {/* El parámetro es opcional */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
