import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Vista2d.css';
import Modal from './Modal';

function Vista2D() {
  const { codigo } = useParams(); // Obtener el código desde los parámetros de la URL
  const navigate = useNavigate();
  // Definir los datos que cambian en base al código ingresado
  const datosPorCodigo = {
    "CITE-CH000": {
      cards: [
        {
          cardImage: './imagenes/crianza.jpg',
          modalImage: './imagenes/crianza-modal.JPG', // Imagen diferente para el modal
          user: 'Crianza',
          description: 'Prácticas de crianza y esquila enfocadas en la sostenibilidad y el bienestar animal.',
          atributos: [
            { nombre: 'Crianza y Esquila', valor: 'Sí' }, // Ajustado según tus requerimientos
            { nombre: 'Ubicación', valor: 'Cusco, Perú' },
            { nombre: 'Raza de animal', valor: 'Alpaca' }, // Ejemplo, cambia según corresponda
            { nombre: 'Color del Animal', valor: 'Blanco' }, // Ejemplo, cambia según corresponda
            { nombre: 'Edad del Animal', valor: '2 años' }, // Ejemplo, cambia según corresponda
            { nombre: 'Registro de sanidad', valor: 'Activo' }, // Ejemplo, cambia según corresponda
            { nombre: 'Registro Reproductivo', valor: 'Historial disponible' }, // Ejemplo, cambia según corresponda
            { nombre: 'Registro de Alimentación', valor: 'Controlado' }, // Ejemplo, cambia según corresponda
            { nombre: 'Criador', valor: 'Juan Pérez' }, // Ejemplo, cambia según corresponda
            { nombre: 'Peso de la Fibra', valor: '4 kg' }, // Ejemplo, cambia según corresponda
            { nombre: 'Aplicó técnica 231-370:2019', valor: 'Sí' } // Ejemplo, cambia según corresponda
          ]
        },
        {
          cardImage: '/imagenes/acopio.jpg',
          modalImage: '/imagenes/acopio-modal.jpg', // Imagen diferente para el modal
          user: 'Acopio',
          description: 'Recogida y clasificación de la fibra obtenida.',
          atributos: [
            { nombre: 'Acopio y Clasificación', valor: 'Sí' }, // Ajustado según tus requerimientos
            { nombre: 'Procedencia', valor: 'Ayacucho, Perú' },
            { nombre: 'Ubicación', valor: 'Centro de Acopio A' }, // Ejemplo, cambia según corresponda
            { nombre: 'Categorización', valor: 'Categoría A' }, // Ejemplo, cambia según corresponda
            { nombre: 'Clasificación', valor: 'Calidad 1' } // Ejemplo, cambia según corresponda
          ]
        },
        {
          cardImage: '/imagenes/t1.JPG',
          modalImage: '/imagenes/t1-modal.jpg', // Imagen diferente para el modal
          user: 'Transformación Primaria',
          description: 'Proceso de lavado, cardado y peinado de la fibra.',
          atributos: [
            { nombre: 'Transformación Primaria', valor: 'Sí' }, // Ajustado según tus requerimientos
            { nombre: 'Escamenado', valor: 'Sí' }, // Ejemplo, cambia según corresponda
            { nombre: 'Cardado', valor: 'Sí' }, // Ejemplo, cambia según corresponda
            { nombre: 'Lavado', valor: 'Sí' }, // Ejemplo, cambia según corresponda
            { nombre: 'Hilado Artesanal', valor: 'Sí' }, // Ejemplo, cambia según corresponda
            { nombre: 'Peso del Hilado Artesanal', valor: '200 g' }, // Ejemplo, cambia según corresponda
            { nombre: 'Titulación', valor: '30 Nm' }, // Ejemplo, cambia según corresponda
            { nombre: 'Cantidad de Hebras', valor: '5' }, // Ejemplo, cambia según corresponda
            { nombre: 'Color', valor: 'Natural' }, // Ejemplo, cambia según corresponda
            { nombre: 'Calidad', valor: 'Alta' }, // Ejemplo, cambia según corresponda
            { nombre: 'Peso', valor: '1 kg' } // Ejemplo, cambia según corresponda
          ]
        },
        {
          cardImage: '/imagenes/t2-1.JPG',
          modalImage: '/imagenes/t2-model.png', // Imagen diferente para el modal
          user: 'Transformación Secundaria',
          description: 'Proceso de hilado y teñido de la fibra cardada.',
          atributos: [
            { nombre: 'Peso del hilo', valor: '150 gramos' },
            { nombre: 'Categoría de la fibra', valor: 'Alpaca Premium' },
            { nombre: 'Productor', valor: 'Hilanderías Unidas SAC' },
            { nombre: 'Lugar de almacenamiento', valor: 'Arequipa, Perú' },
            { nombre: 'Densidad lineal', valor: '200 tex' },
            { nombre: 'Micronaje', valor: '22 micrones' },
            { nombre: 'Torsión del hilado', valor: 'Z' },
            { nombre: 'Finura', valor: 'Muy fina' },
            { nombre: 'Solidez', valor: 'Alta' }
          ]
        },
        {
          cardImage: '/imagenes/ela-2.JPG',
          modalImage: '/imagenes/waka.jpeg', // Imagen diferente para el modal
          user: 'Elaboración',
          description: 'Diseño y confección de las prendas finales.',
          atributos: [
            { nombre: 'Tipo de prenda', valor: 'Camisa' }, // Ejemplo, cambia según corresponda
            { nombre: 'Diseñado por', valor: 'Juan Pérez' }, // Ejemplo, cambia según corresponda
            { nombre: 'Descripción de la prenda', valor: 'Camisa de algodón ligera.' }, // Ejemplo
            { nombre: 'Elaborado por', valor: 'Taller de Costura XYZ' }, // Ejemplo
            { nombre: 'Técnicas de tejido', valor: 'Punto, tejido plano' }, // Ejemplo
            { nombre: 'Máquina utilizada', valor: 'Máquina de coser industrial' }, // Ejemplo
            { nombre: 'Combinación de colores', valor: 'Blanco y azul' }, // Ejemplo
            { nombre: 'Descripción de componentes', valor: '100% algodón' }, // Ejemplo
            { nombre: 'Dimensión de componentes', valor: '30x40 cm (mangas)' }, // Ejemplo
            { nombre: 'Peso de la prenda', valor: '500 gramos' }, // Ejemplo, según ya estaba
            { nombre: 'Temporada', valor: 'Primavera-Verano' }, // Ejemplo, según ya estaba
            { nombre: 'Tallas Disponibles', valor: 'S, M, L, XL' }, // Ejemplo, según ya estaba
            { nombre: 'Consideraciones del diseño', valor: 'Ajuste regular' }, // Ejemplo
            { nombre: 'Historia detrás del diseño', valor: 'Inspirada en la moda urbana.' } // Ejemplo
          ]
        },
        {
          cardImage: '/imagenes/elaboracion.JPG',
          modalImage: '/imagenes/comercializacion-modal.jpg', // Imagen diferente para el modal
          user: 'Comercialización',
          description: 'Venta de las prendas al consumidor final.',
          atributos: [
            { nombre: 'Fecha de disponibilidad', valor: '01/12/2024' }, // Ejemplo
            { nombre: 'Costo de producción', valor: '$20.00' }, // Ejemplo
            { nombre: 'Valor del mercado aproximado', valor: '$35.00' }, // Ejemplo
            { nombre: 'Escalas de sostenibilidad', valor: 'Alta' }, // Ejemplo
            { nombre: 'Cantidad mínima de producción', valor: '100 unidades' }, // Ejemplo
            { nombre: 'Código QR', valor: 'QR123456789' }, // Ejemplo
            { nombre: 'Historia del impacto social de la prenda', valor: 'Contribución a la comunidad local.' } // Ejemplo
          ]
        }        
      ],
      attributeImages: {
        'Tipo de tejido': '/imagenes/3.png',
        'Dimensión de componentes': '/imagenes/2.png',
        'Forma de componentes': '/imagenes/1.png',
        'Tensión de componente': '/imagenes/tension-1234.jpg'
      }
    },
    "CITE-CH001": {
      cards: [
        {
          cardImage: '/imagenes/t2.JPG',
          modalImage: '/imagenes/ela-2.JPG', 
          user: 'Transformación Secundaria',
          description: 'Segunda etapa de procesamiento del producto.',
          atributos: [
            { nombre: 'Peso del hilo', valor: '150 gramos' },
            { nombre: 'Categoría de la fibra', valor: 'Alpaca Premium' },
            { nombre: 'Productor', valor: 'Hilanderías Unidas SAC' },
            { nombre: 'Lugar de almacenamiento', valor: 'Arequipa, Perú' }
          ]
        },
        {
          cardImage: '/imagenes/elaboracion.JPG',
          modalImage: '/imagenes/crianza.jpg', // Imagen diferente para el modal
          user: 'Diseño',
          description: 'Proceso de diseño del producto antes de su fabricación.',
          atributos: [
            { nombre: 'Tipo de tejido', valor: 'Punto circular' },
            { nombre: 'Dimensión de componentes', valor: '10x10 cm' },
            { nombre: 'Forma de componentes', valor: 'Rectangular' },
            { nombre: 'Tensión de componente', valor: 'Baja' },
            { nombre: 'Tipo de puntos', valor: 'Punto liso' },
            { nombre: 'Combinación de colores', valor: 'Azul y blanco' },
            { nombre: 'Título de puntos', valor: 'Número 10' },
            { nombre: 'Título de hilado', valor: '15/1' },
            { nombre: 'Máquina galga', valor: '12 GG' },
            { nombre: 'Técnicas', valor: 'Jacquard' },
            { nombre: 'Diseñador', valor: 'Carlos Pérez' },
            { nombre: 'Número de filas', valor: '200' },
            { nombre: 'Número de agujas', valor: '180' },
            { nombre: '% de encogimiento', valor: '5%' }
          ]
        }
        // Otras cartas
      ],
      attributeImages: {
        'Tipo de tejido': '/imagenes/1.png',
        'Dimensión de componentes': '/imagenes/2.png',
        'Forma de componentes': '/imagenes/3.png',
        'Tensión de componente': '/imagenes/tension-5678.jpg'
      }
    }
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [inputCodigo, setInputCodigo] = useState(codigo || "CITE-CH000"); // Si no hay código en la URL, usar "1234" por defecto
  const [cardsData, setCardsData] = useState([]);
  const [attributeImages, setAttributeImages] = useState({});

  useEffect(() => {
    // Al cambiar el código, actualizar las cartas
    if (datosPorCodigo[inputCodigo]) {
      setCardsData(datosPorCodigo[inputCodigo].cards);
      setAttributeImages(datosPorCodigo[inputCodigo].attributeImages);
    } else {
      setCardsData([]);
      setAttributeImages({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputCodigo]); 

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleCodigoChange = (e) => {
    setInputCodigo(e.target.value);
  };

  const handleBuscarCodigo = () => {
    if (datosPorCodigo[inputCodigo]) {
      navigate(`/vista2d/${inputCodigo}`); // Redirigir a la misma página con el nuevo código en la URL
    } else {
      alert("Código no encontrado");
    }
  };

  return (
    <section className="vista2d-section">
      <h1>Proceso del Producto</h1>

      {/* Campo de entrada para el código */}
      <div className="input-section-vista">
        <input 
          type="text" 
          value={inputCodigo} 
          onChange={handleCodigoChange} 
          placeholder="Ingresa el código del producto" 
        />
        <button onClick={handleBuscarCodigo}>Buscar</button>
      </div>

      {/* Renderizado de las tarjetas basado en el código */}
      <div className="cards-container">
        {cardsData.length > 0 ? (
          cardsData.map((card, i) => (
            <React.Fragment key={i}>
              <div className="card" onClick={() => handleCardClick(card)}>
                <div className="card-image">
                  <img src={card.cardImage} alt={`Imagen ${i + 1}`} />
                </div>
                <div className="card-content">
                  <h2>{card.user}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
              {i < cardsData.length - 1 && <div className="arrow">→</div>}
            </React.Fragment>
          ))
        ) : (
          <p>No hay datos disponibles. Ingresa un código.</p>
        )}
      </div>

      {selectedCard && (
        <Modal 
          card={selectedCard} 
          onClose={handleCloseModal} 
          attributeImages={attributeImages} // Pasar las imágenes de los subtítulos al modal
        />
      )}
    </section>
  );
}

export default Vista2D;