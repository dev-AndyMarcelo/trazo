import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ card, onClose, attributeImages }) => {
  const [hoveredAttribute, setHoveredAttribute] = useState(null);

  const handleMouseEnter = (attributeName) => {
    // Solo activar el hover si hay una imagen para ese atributo
    if (attributeImages[attributeName]) {
      setHoveredAttribute(attributeName);
    }
  };

  const handleMouseLeave = () => {
    setHoveredAttribute(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img 
            src={hoveredAttribute ? attributeImages[hoveredAttribute] : card.modalImage} 
            alt={card.user} 
          />
        </div>
        <div className="modal-info">
          <h2>{card.user}</h2>
          <p>{card.description}</p>
          <ul>
            {card.atributos.map((atributo, index) => (
              <li 
                key={index} 
                onMouseEnter={() => handleMouseEnter(atributo.nombre)} 
                onMouseLeave={handleMouseLeave}
              >
                <strong>{atributo.nombre}:</strong> {atributo.valor}
              </li>
            ))}
          </ul>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;