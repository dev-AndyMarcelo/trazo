import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Vista2d.css';
import Modal from './Modal';

function Vista2D() {
  const { codigo } = useParams(); // Obtener el código desde los parámetros de la URL
  const navigate = useNavigate();
  // Definir los datos que cambian en base al código ingresado
  const datosPorCodigo = {
    ".": {
    "cards": [
      {
        "cardImage": "/imagenes/crianza.jpg",
        "modalImage": "/imagenes/crianza-modal.JPG",
        "user": "Crianza y Esquila",
        "description": "Prácticas de crianza y esquila enfocadas en la sostenibilidad y el bienestar animal.",
        "atributos": [
          { "nombre": "Ubicación", "valor": "Cusco, Perú" },
          { "nombre": "Raza de animal", "valor": "Alpaca" },
          { "nombre": "Color del Animal", "valor": "Blanco" },
          { "nombre": "Edad del Animal", "valor": "2 años" },
          { "nombre": "Registro de sanidad", "valor": "Activo" },
          { "nombre": "Registro Reproductivo", "valor": "Historial disponible" },
          { "nombre": "Registro de Alimentación", "valor": "Controlado" },
          { "nombre": "Criador", "valor": "Juan Pérez" },
          { "nombre": "Peso de la Fibra", "valor": "4 kg" },
          { "nombre": "Aplicó técnica 231-370:2019", "valor": "Sí" }
        ]
      },
      {
        "cardImage": "/imagenes/acopio.jpg",
        "modalImage": "/imagenes/acopio-modal.jpg",
        "user": "Acopio y Clasificación",
        "description": "Recogida y clasificación de la fibra obtenida.",
        "atributos": [
          { "nombre": "Procedencia", "valor": "Ayacucho, Perú" },
          { "nombre": "Ubicación", "valor": "Centro de Acopio A" },
          { "nombre": "Categorización", "valor": "Categoría A" },
          { "nombre": "Clasificación", "valor": "Calidad 1" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-2.JPG",
        "modalImage": "/imagenes/t2-3.JPG",
        "user": "Transformación Primaria",
        "description": "Proceso de lavado, cardado y peinado de la fibra.",
        "atributos": [
          { "nombre": "Escamenado", "valor": "Sí" },
          { "nombre": "Cardado", "valor": "Sí" },
          { "nombre": "Lavado", "valor": "Sí" },
          { "nombre": "Hilado Artesanal", "valor": "Sí" },
          { "nombre": "Titulación", "valor": "30 Nm" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Cantidad de Hebras", "valor": "5" },
          { "nombre": "Color", "valor": "Natural" },
          { "nombre": "Calidad", "valor": "Alta" },
          { "nombre": "Peso", "valor": "1 kg" }
        ]
      },
      {
        "cardImage": "/imagenes/t2-1.JPG",
        "modalImage": "/imagenes/hilo-celeste.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "H234" },
          { "nombre": "Color del hilo", "valor": "Celeste" },
          { "nombre": "Titulación del Hilo", "valor": "2/28" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Torción del Hilo", "valor": "Z" },
          { "nombre": "Peso del hilo", "valor": "150 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-1.JPG",
        "modalImage": "/imagenes/t2-8.JPG",
        "user": "Diseño y Elaboración de Prendas",
        "description": "Diseño y confección de las prendas finales.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Chaleco de mujer" },
          { "nombre": "Diseñador", "valor": "Daniela Oviedo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Camisa de algodón ligera." },
          { "nombre": "Técnica de tejido", "valor": "Punto, tejido plano" },
          { "nombre": "Máquina utilizada", "valor": "Máquina de coser industrial" },
          { "nombre": "Combinación de colores", "valor": "Blanco y azul" },
          { "nombre": "Cantidad de componentes", "valor": "2" },
          { "nombre": "Descripción de los componentes", "valor": "100% algodón" },
          { "nombre": "Peso total", "valor": "500 g" },
          { "nombre": "Temporada recomendada", "valor": "Primavera-Verano" },
          { "nombre": "Tallas disponibles", "valor": "S, M, L, XL" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano, no blanquear" },
          { "nombre": "Historia del diseño", "valor": "Inspirada en la moda urbana." }
        ]
      },
        {
          "cardImage": "/imagenes/comercializacion.JPG",
          "modalImage": "/imagenes/comercializacion.JPG",
          "user": "Comercialización",
          "description": "Venta de las prendas al consumidor final.",
          "atributos": [
            { "nombre": "Fecha de disponibilidad", "valor": "01/12/2024" },
            { "nombre": "Costo de producción", "valor": "20.00" },
            { "nombre": "Valor del mercado aproximado", "valor": "35.00" },
            { "nombre": "Cantidad mínima de producción", "valor": "100 unidades" },
            { "nombre": "Detalles de packaging", "valor": "Caja de cartón reciclable" },
            { "nombre": "Historia del impacto social de la prenda", "valor": "Contribución a la comunidad local." }
          ]
        }
      ],
      "attributeImages": {
        "Tipo de tejido": "/imagenes/3.png"
      }
    },

    "CITE-CH001": {
      cards: [
        {
          cardImage: '/imagenes/t2-9.JPG',
          modalImage: '/imagenes/hilo-rojo.jpg', 
          user: 'Transformación Secundaria',
          description: 'Proceso de hilado y teñido de la fibra cardada.',
          atributos: [
            { nombre: 'Código del Hilo', valor: 'RJ2055, NM-500' },
            { nombre: 'Color del hilo', valor: 'Rojo, Negro' },
            { nombre: 'Titulación del Hilo', valor: '2/28, 2/28' },
            { nombre: 'Sentido', valor: 'S, S' },
            { nombre: 'Torción del Hilo', valor: '127, 37' },
            { nombre: 'Peso del hilo', valor: '1000 g, 1000 g' }
          ]
        },
        {
          cardImage: '/imagenes/ela-2.JPG',
          modalImage: '/imagenes/t2-11.JPG', 
          user: 'Diseño y Elaboración de Cardigan de mujer',
          description: 'Proceso de diseño y elaboración de prendas.',
          atributos: [
            { nombre: 'Nombre de la prenda', valor: 'Cardigan de mujer' },
            { nombre: 'Diseñador', valor: 'Yamil Arredondo' },
            { nombre: 'Elaborado', valor: 'CITE Textil Camélidos Cusco' },
            { nombre: 'Descripción', valor: 'Cardigan tejido en punto con mangas acampanadas y detalle de iconografía tradicional en la pretina. Hecho 100% de baby alpaca, combinando suavidad y calidez para las estaciones de otoño e invierno. Una pieza moderna con esencia tradicional.' },
            { nombre: 'Técnica de tejido', valor: 'Punto jersey' },
            { nombre: 'Máquina utilizada', valor: 'Máquina rectilínea doméstica Brother Palie, galga 6' },
            { nombre: 'Combinación de colores', valor: 'Rojo, Negro' },
            { nombre: 'Cantidad de componentes', valor: '6' },
            { nombre: 'Descripción de los componentes', valor: 'Delantero, Espalda, Manga derecha, Manga izquierda, Pretina' },
            { nombre: 'Peso total', valor: '500 g' },
            { nombre: 'Temporada recomendada', valor: 'Otoño - Invierno' },
            { nombre: 'Tallas disponibles', valor: 'M' },
            { nombre: 'Instrucciones de cuidado', valor: 'Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol' },
            { nombre: 'Historia del diseño', valor: 'Este cardigan es una reinterpretación de una prenda tradicional andina, adaptada para un mercado más comercial sin perder su esencia cultural. Las iconografías en la pretina evocan los diseños ancestrales, dándole un toque único y contemporáneo.' }
          ]
        },
        {
          cardImage: '/imagenes/C1.JPG', // Si tienes una imagen de comercialización
          modalImage: '/imagenes/C1-modal.JPG', // Imagen diferente para el modal de comercialización
          user: 'Comercialización',
          description: 'Detalles sobre la comercialización de la prenda.',
          atributos: [
            { nombre: 'Fecha de disponibilidad', valor: '24/10/2024' },
            { nombre: 'Costo de producción', valor: '187' },
            { nombre: 'Valor del mercado aproximado', valor: '300' },
            { nombre: 'Cantidad mínima de producción', valor: '20' },
            { nombre: 'Detalles de packaging', valor: 'N/A' }, // Si tienes detalles específicos, puedes agregar más aquí.
            { nombre: 'Historia del impacto social de la prenda', valor: 'Apoya a artesanas de Chincheros, promoviendo la conservación de técnicas tradicionales.' }
          ]
        }
      ],
      attributeImages: {
        'Color del hilo': '/imagenes/hilo-negro.jpg',
      }
    },
    "CITE-CH002": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-1.JPG",
        "modalImage": "/imagenes/hilo-rojo.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "RJ2055, NM-500" },
          { "nombre": "Color del hilo", "valor": "Rojo, Negro" },
          { "nombre": "Titulación del Hilo", "valor": "2/28, 2/28" },
          { "nombre": "Sentido", "valor": "S, S" },
          { "nombre": "Torción del Hilo", "valor": "127, 37" },
          { "nombre": "Peso del hilo", "valor": "1000 g, 1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-3.JPG",
        "modalImage": "/imagenes/t2-2.JPG",
        "user": "Diseño y Elaboración de Falda tipo pollera de mujer",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Falda tipo pollera de mujer" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Falda inspirada en la tradicional pollera de las mujeres de Chinchero, tejida en punto pavo real con calado en la pretina alta. Hecha 100% de baby alpaca, combina la tradición andina con un toque contemporáneo, ideal para la temporada otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Calado en punto pavo real" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Rojo, Negro" },
          { "nombre": "Cantidad de componentes", "valor": "3" },
          { "nombre": "Descripción de los componentes", "valor": "Delantero, Posterior, Pretina" },
          { "nombre": "Peso total", "valor": "300g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Esta falda atemporal es una reinterpretación moderna de la pollera tradicional de las mujeres de Chinchero, manteniendo vivos los detalles y técnicas artesanales, pero adaptada a una prenda más ligera y versátil para el día a día." }
        ]
      },
      {
        "cardImage": "/imagenes/C2.JPG",
        "modalImage": "/imagenes/C2-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "148" },
          { "nombre": "Valor del mercado aproximado", "valor": "300" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Contribuye a la economía local y la preservación cultural." }
        ]
      }
      ],
      "attributeImages": {
        'Color del hilo': '/imagenes/hilo-negro.jpg',
      }
    },

    "CITE-CH003": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-2.JPG",
        "modalImage": "/imagenes/hilo-rojo.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "RJ2055, NM-500" },
          { "nombre": "Color del hilo", "valor": "Rojo, Negro" },
          { "nombre": "Titulación del Hilo", "valor": "2/28, 2/28" },
          { "nombre": "Sentido", "valor": "S, S" },
          { "nombre": "Torción del Hilo", "valor": "127, 37" },
          { "nombre": "Peso del hilo", "valor": "1000 g, 1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-2.JPG",
        "modalImage": "/imagenes/t2-3.JPG",
        "user": "Diseño y Elaboración ",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Cardigan de mujer" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Elegante cardigan de mujer en tejido de punto con mangas pegadas, adornado con un detalle de iconografía en la pretina. Confeccionado 100% en baby alpaca, esta prenda combina confort y estilo, perfecta para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Punto jersey" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Rojo, Negro" },
          { "nombre": "Cantidad de componentes", "valor": "6" },
          { "nombre": "Descripción de los componentes", "valor": "Delantero, Espalda, Manga derecha, Manga izquierda, Pretina" },
          { "nombre": "Peso total", "valor": "500 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Esta prenda tradicional ha sido reinterpretada y adaptada en un cardigan más comercial, manteniendo su esencia cultural y brindando un estilo moderno y versátil." }
        ]
      },
      {
        "cardImage": "/imagenes/comercializacion.JPG",
        "modalImage": "/imagenes/comercializacion.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "400" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Fortalece el trabajo de comunidades indígenas en la confección." }
        ]
      }
      ],
      "attributeImages": {
        'Color del hilo': '/imagenes/hilo-negro.jpg',
      }
    },
    
    "CITE-CH004": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-3.JPG",
        "modalImage": "/imagenes/hilo-blanco.jpg",
        "user": "Transformación Secundaria",
        "description": "Segunda etapa de procesamiento del producto.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "NM-500, SFN-100" },
          { "nombre": "Color del hilo", "valor": "Negro, Blanco" },
          { "nombre": "Titulación del Hilo", "valor": "2/28, 2/28" },
          { "nombre": "Sentido", "valor": "S, S" },
          { "nombre": "Torción del Hilo", "valor": "37, 38" },
          { "nombre": "Peso del hilo", "valor": "1000 g, 1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-3.JPG",
        "modalImage": "/imagenes/t2-4.JPG",
        "user": "Diseño y Elaboración de Pantalón recto de mujer",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Pantalón recto de mujer" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Pantalón recto de mujer con pretina alta, adornado con detalles de bordado en tejido de punto pavo real. Confeccionado 100% en baby alpaca, este pantalón atemporal presenta aplicaciones bordadas con hilos de fantasía, aportando un toque único y sofisticado a cualquier atuendo para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Calado en punto pavo real" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Negro, Blanco" },
          { "nombre": "Cantidad de componentes", "valor": "3" },
          { "nombre": "Descripción de los componentes", "valor": "Pieza izquierda, Pieza derecha, Pretina" },
          { "nombre": "Peso total", "valor": "300 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este pantalón es una reinterpretación de una prenda masculina tradicional, adaptada al estilo contemporáneo femenino, fusionando técnicas artesanales con un diseño moderno y funcional." }
        ]
      },
      {
        "cardImage": "/imagenes/comercializacion.JPG",
        "modalImage": "/imagenes/comercializacion.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "350" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Apoya a artesanas que preservan el bordado tradicional andino." }
        ]
      }
      ],
      "attributeImages": {
        'Color del hilo': '/imagenes/hilo-negro.jpg',
      }
    },

    "CITE-CH005": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-4.JPG",
        "modalImage": "/imagenes/hilo-rojo.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "RJ2055, M2336, M2327, F2436, AZ1660" },
          { "nombre": "Color del hilo", "valor": "Rojo, Amarillo, Verde, Celeste, Azul" },
          { "nombre": "Titulación del Hilo", "valor": "2/28, 1/5, 1/28, 2/16, 1/5" },
          { "nombre": "Sentido", "valor": "S, -, S, S, -" },
          { "nombre": "Torción del Hilo", "valor": "127, -, 140, 121, -" },
          { "nombre": "Peso del hilo", "valor": "1000 g cada uno" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-4.JPG",
        "modalImage": "/imagenes//t2-5.JPG",
        "user": "Diseño y Elaboración de Chaleco de mujer",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Chaleco de mujer" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Chaleco de mujer con un diseño listado multicolor, confeccionado en punto jersey y punto panal. Utilizando hilo faltasia, hilo bluque y hilo liso en título 2/28, esta prenda está hecha 100% de baby alpaca, ofreciendo calidez y estilo para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Jersey, punto retenido, punto panal" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Rojo, Amarillo, Verde, Celeste, Azul" },
          { "nombre": "Cantidad de componentes", "valor": "4" },
          { "nombre": "Descripción de los componentes", "valor": "Delantero izquierdo, Delantero derecho, Espalda, Pretina" },
          { "nombre": "Peso total", "valor": "700 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Inspirado en las mantas tradicionales de las mujeres de Chinchero, este chaleco fusiona la herencia cultural con un diseño contemporáneo, brindando versatilidad y elegancia." }
        ]
      },
      {
        "cardImage": "/imagenes/chaleco.png",
        "modalImage": "/imagenes/chaleco.png",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "400" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Impulsa el desarrollo de habilidades artesanales en mujeres locales." }
        ]
      }
      ],
      "attributeImages": {
        "Código del Hilo": "/imagenes/hilo-amarillo.jpg",
        "Color del hilo": "/imagenes/hilo-verde.jpg",
        "Titulación del Hilo": "/imagenes/hilo-celeste.jpg",
        "Sentido": "/imagenes/hilo-azul.jpg",
      }
    },

    "CITE-CH006": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-5.JPG",
        "modalImage": "/imagenes/hilo-negro.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "NM-500" },
          { "nombre": "Color del hilo", "valor": "Negro" },
          { "nombre": "Titulación del Hilo", "valor": "2/28" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Torción del Hilo", "valor": "37" },
          { "nombre": "Peso del hilo", "valor": "1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-1.JPG",
        "modalImage": "/imagenes/t2-6.JPG",
        "user": "Diseño y Elaboración de Vestido Negro",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Vestido" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Vestido de corte recto en punto jersey, con cuello redondo y diseño enterizo. Esta prenda, confeccionada en 100% baby alpaca, combina la comodidad y el estilo, convirtiéndose en una opción ideal para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Jersey" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Negro" },
          { "nombre": "Cantidad de componentes", "valor": "4" },
          { "nombre": "Descripción de los componentes", "valor": "Delantero, Posterior, Pretina" },
          { "nombre": "Peso total", "valor": "300 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este vestido de corte recto es una reinterpretación atemporal de la tradicional prenda Huncu de la cultura Chincheros, que fusiona elementos culturales con un diseño contemporáneo, ideal para cualquier ocasión." }
        ]
      },
      {
        "cardImage": "/imagenes/vestido-1.png",
        "modalImage": "/imagenes/vestido-2.png",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "400" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Genera ingresos para comunidades que utilizan técnicas de tejido tradicionales." }
        ]
      }
      ],
      "attributeImages": {
        "a": "/imagenes/hilo-codigo.png",
      }
    },

    "CITE-CH007": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-6.JPG",
        "modalImage": "/imagenes/hilo-rojo.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "RJ2055, M2336, M2327, F2436, AZ1660" },
          { "nombre": "Color del hilo", "valor": "Rojo, Amarillo, Verde, Celeste, Azul" },
          { "nombre": "Titulación del Hilo", "valor": "2/28, 1/5, 1/28, 2/16, 1/5" },
          { "nombre": "Sentido", "valor": "S, -, S, S, -" },
          { "nombre": "Torción del Hilo", "valor": "127, -, 140, 121, -" },
          { "nombre": "Peso del hilo", "valor": "1000 g cada uno" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-2.JPG",
        "modalImage": "/imagenes/t2-7.JPG",
        "user": "Diseño y Elaboración de Bolero",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Bolero" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Elegante bolero multicolor con mangas globo, confeccionado en punto panal y retenido. Este diseño utiliza hilo liso continuo y hilo fantasía bucle, ofreciendo un estilo único y sofisticado. Ideal para complementar cualquier atuendo de otoño-invierno, combina calidez y elegancia en una sola prenda." },
          { "nombre": "Técnica de tejido", "valor": "Punto panal / retenido" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Rojo, Amarillo, Verde, Celeste, Azul" },
          { "nombre": "Cantidad de componentes", "valor": "3" },
          { "nombre": "Descripción de los componentes", "valor": "Cuerpo, Manga derecha, Manga izquierda, Pretina" },
          { "nombre": "Peso total", "valor": "300 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este bolero está inspirado en las prendas tradicionales de las mujeres de Chinchero, fusionando la herencia cultural con un diseño moderno, lo que lo convierte en una pieza versátil y atemporal." }
        ]
      },
      {
        "cardImage": "/imagenes/C7.JPG",
        "modalImage": "/imagenes/C7-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "400" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Fomenta la identidad cultural y la moda sostenible." }
        ]
      }
      ],
      "attributeImages": {
        "Código del Hilo": "/imagenes/hilo-amarillo.jpg",
        "Color del hilo": "/imagenes/hilo-verde.jpg",
        "Titulación del Hilo": "/imagenes/hilo-celeste.jpg",
        "Sentido": "/imagenes/hilo-azul.jpg",
      }
    },

    "CITE-CH008": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-7.JPG",
        "modalImage": "/imagenes/hilo-negro.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "NM-500" },
          { "nombre": "Color del hilo", "valor": "Negro" },
          { "nombre": "Titulación del Hilo", "valor": "2/28" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Torción del Hilo", "valor": "37" },
          { "nombre": "Peso del hilo", "valor": "1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-3.JPG",
        "modalImage": "/imagenes/t2-8.JPG",
        "user": "Diseño y Elaboración de Top",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Top" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Top negro en punto retenido con estructura simétrica y detalles de pasadores en la parte posterior. Este diseño contemporáneo combina la elegancia y la comodidad, convirtiéndolo en una opción ideal para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Punto panal / retenido" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Negro" },
          { "nombre": "Cantidad de componentes", "valor": "2" },
          { "nombre": "Descripción de los componentes", "valor": "Cuerpo, Tirantes" },
          { "nombre": "Peso total", "valor": "200 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Inspirado en las formas geométricas de las estructuras coloniales de la cultura chinchera, este top fusiona elementos tradicionales con un estilo moderno, creando una pieza versátil y atemporal." }
        ]
      },
      {
        "cardImage": "/imagenes/C8.JPG",
        "modalImage": "/imagenes/C8-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "150" },
          { "nombre": "Valor del mercado aproximado", "valor": "300" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Contribuye a la preservación de la cultura textil andina." }
        ]
      }
      ],
      "attributeImages": {
        "a": "/imagenes/hilo-codigo.png",
      }
    },

    "CITE-CH009": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-9.JPG",
        "modalImage": "/imagenes/hilo-negro.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "NM-500" },
          { "nombre": "Color del hilo", "valor": "Negro" },
          { "nombre": "Titulación del Hilo", "valor": "2/28" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Torción del Hilo", "valor": "37" },
          { "nombre": "Peso del hilo", "valor": "1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-4.JPG",
        "modalImage": "/imagenes/t2-10.JPG",
        "user": "Diseño y Elaboración de Pantalón de bota acampanada",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Pantalón de bota acampanada" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Pantalón de bota acampanada confeccionado en tejido de punto calado en color negro, adornado con un elegante diseño de rombos. Esta prenda combina la tradición con la modernidad, ofreciendo un estilo distintivo y versátil para la temporada de otoño-invierno." },
          { "nombre": "Técnica de tejido", "valor": "Calado" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Negro" },
          { "nombre": "Cantidad de componentes", "valor": "3" },
          { "nombre": "Descripción de los componentes", "valor": "Pierna derecha, Pierna izquierda, Pretina" },
          { "nombre": "Peso total", "valor": "400 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este pantalón está inspirado en las polleras tradicionales, adaptadas a un diseño moderno, fusionando la herencia cultural con tendencias contemporáneas, ideal para quienes buscan estilo y comodidad." }
        ]
      },
      {
        "cardImage": "/imagenes/C9.JPG",
        "modalImage": "/imagenes/C9-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "200" },
          { "nombre": "Valor del mercado aproximado", "valor": "400" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Contribuye a la preservación de la cultura textil andina." }
        ]
      }
      ],
      "attributeImages": {
        "a": "/imagenes/hilo-codigo.png",
      }
    },

    "CITE-CH0010": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-11.JPG",
        "modalImage": "/imagenes/hilo-celeste.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "FJ1451, F2436" },
          { "nombre": "Color del hilo", "valor": "Gris, Celeste" },
          { "nombre": "Titulación del Hilo", "valor": "1/3, 2/16" },
          { "nombre": "Sentido", "valor": "-, S" },
          { "nombre": "Torción del Hilo", "valor": "-, 121" },
          { "nombre": "Peso del hilo", "valor": "1000 g, 1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-1.JPG",
        "modalImage": "/imagenes/t2-1.JPG",
        "user": "Diseño y Elaboración de Abrigo largo",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Abrigo largo" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Abrigo largo confeccionado en lana, con un diseño entallado que combina hilo de fantasía y hilo liso. Presenta aplicaciones en crochet en el cuello, añadiendo un toque artesanal y elegante a la prenda. Ideal para los días fríos de otoño e invierno, este abrigo es tanto funcional como estiloso." },
          { "nombre": "Técnica de tejido", "valor": "Jacquard" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Gris, Celeste" },
          { "nombre": "Cantidad de componentes", "valor": "6" },
          { "nombre": "Descripción de los componentes", "valor": "Delanteros, Posterior, Manga derecha, Manga izquierda, Cuello" },
          { "nombre": "Peso total", "valor": "1000 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este abrigo está inspirado en los fajines utilizados en trajes tradicionales, fusionando la rica herencia cultural con un estilo contemporáneo, perfecto para quienes valoran la moda con significado." }
        ]
      },
      {
        "cardImage": "/imagenes/C10.JPG",
        "modalImage": "/imagenes/C10-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "300" },
          { "nombre": "Valor del mercado aproximado", "valor": "500" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "fomenta el trabajo artesanal y la sostenibilidad en la moda." }
        ]
      }
      ],
      "attributeImages": {
        "Código del Hilo": "/imagenes/hilo-gris.jpg",
      }
    },

    "CITE-CH0011": {
    "cards": [
      {
        "cardImage": "/imagenes/t2-2.JPG",
        "modalImage": "/imagenes/hilo-gris.jpg",
        "user": "Transformación Secundaria",
        "description": "Proceso de hilado y teñido de la fibra cardada.",
        "atributos": [
          { "nombre": "Código del Hilo", "valor": "FJ1451, T-M729" },
          { "nombre": "Color del hilo", "valor": "Gris, Morado" },
          { "nombre": "Titulación del Hilo", "valor": "1/3, 1/3" },
          { "nombre": "Sentido", "valor": "-, -" },
          { "nombre": "Torción del Hilo", "valor": "-, -" },
          { "nombre": "Peso del hilo", "valor": "1000 g, 1000 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-2.JPG",
        "modalImage": "/imagenes/t2-2.JPG",
        "user": "Diseño y Elaboración de Abrigo corto",
        "description": "Proceso de diseño y elaboración de prendas.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Abrigo corto" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Abrigo corto con un atractivo diseño en animal print, confeccionado en un suave tejido Jacquard. Este abrigo es perfecto para añadir un toque de sofisticación y originalidad a cualquier atuendo de otoño e invierno, combinando estilo y comodidad en una sola prenda." },
          { "nombre": "Técnica de tejido", "valor": "Jacquard" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Gris, Morado" },
          { "nombre": "Cantidad de componentes", "valor": "5" },
          { "nombre": "Descripción de los componentes", "valor": "Delanteros, Posterior, Manga derecha, Manga izquierda, Pretina" },
          { "nombre": "Peso total", "valor": "700 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Tallas disponibles", "valor": "M" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Este abrigo está inspirado en el arado de la tierra y sus surcos, representando la conexión con la rica cultura agrícola de Chincheros, aportando un sentido de identidad a cada prenda." }
        ]
      },
      {
        "cardImage": "/imagenes/C11.JPG",
        "modalImage": "/imagenes/C11-modal.JPG",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "250" },
          { "nombre": "Valor del mercado aproximado", "valor": "450" },
          { "nombre": "Cantidad mínima de producción", "valor": "20" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "Apoya a mujeres artesanas en el desarrollo de habilidades y su independencia económica." }
        ]
      }
      ],
      "attributeImages": {
        "Color del hilo": "/imagenes/hilo-morado.jpg",
      }
    },

    "CITE-CH0012": {
    "cards": [
      {
        "cardImage": "/imagenes/crianza.jpg",
        "modalImage": "/imagenes/crianza-modal.JPG",
        "user": "Crianza y Esquila",
        "description": "Detalles del proceso de crianza y esquila de los animales.",
        "atributos": [
          { "nombre": "Ubicación", "valor": "Upis - Ocongate - Quispicanchis" },
          { "nombre": "Raza de animal", "valor": "Huacaya" },
          { "nombre": "Color del Animal", "valor": "Blanco" },
          { "nombre": "Edad del Animal", "valor": "6 - 2 años" },
          { "nombre": "Registro de sanidad", "valor": "SI" },
          { "nombre": "Registro Reproductivo", "valor": "SI" },
          { "nombre": "Registro de Alimentación", "valor": "SI" },
          { "nombre": "Criador", "valor": "Pascual Choque Mandura" },
          { "nombre": "Peso de la Fibra", "valor": "4 libras" },
          { "nombre": "Aplicó técnica 231-370:2019", "valor": "Si" }
        ]
      },
      {
        "cardImage": "/imagenes/acopio.jpg",
        "modalImage": "/imagenes/acopio-modal.jpg",
        "user": "Acopio y Clasificación",
        "description": "Detalles sobre el acopio y la clasificación de la fibra.",
        "atributos": [
          { "nombre": "Procedencia", "valor": "Municipalidad" },
          { "nombre": "Ubicación", "valor": "Ocongate" },
          { "nombre": "Categorización", "valor": "Extra fina (80%)" },
          { "nombre": "Clasificación", "valor": "Super baby" }
        ]
      },
      {
        "cardImage": "/imagenes/d2.JPG",
        "modalImage": "/imagenes/t2-2.JPG",
        "user": "Transformación Primaria",
        "description": "Detalles sobre la transformación primaria de la fibra.",
        "atributos": [
          { "nombre": "Escamenado", "valor": "SI" },
          { "nombre": "Cardado", "valor": "SI" },
          { "nombre": "Lavado", "valor": "SI" },
          { "nombre": "Hilado Artesanal", "valor": "SI" },
          { "nombre": "Titulación", "valor": "2" },
          { "nombre": "Sentido", "valor": "S" },
          { "nombre": "Cantidad de Hebras", "valor": "2" },
          { "nombre": "Color", "valor": "LF" },
          { "nombre": "Calidad", "valor": "Baby Alpaca" },
          { "nombre": "Peso", "valor": "500 g" }
        ]
      },
      {
        "cardImage": "/imagenes/ela-3.JPG",
        "modalImage": "/imagenes/t2-8.JPG",
        "user": "Diseño y Elaboración de Cuello",
        "description": "Proceso de diseño y confección de la prenda.",
        "atributos": [
          { "nombre": "Nombre de la prenda", "valor": "Cuello" },
          { "nombre": "Diseñador", "valor": "Yamil Arredondo" },
          { "nombre": "Elaborado", "valor": "CITE Textil Camélidos Cusco" },
          { "nombre": "Descripción", "valor": "Confeccionada en suave baby alpaca, esta bufanda combina técnicas de tejido como soga y link, ofreciendo una textura elegante y cálida. Ideal para añadir un toque sofisticado a cualquier look." },
          { "nombre": "Técnica de tejido", "valor": "Soga / Link" },
          { "nombre": "Máquina utilizada", "valor": "Máquina rectilínea doméstica Brother Palie, galga 6" },
          { "nombre": "Combinación de colores", "valor": "Crema" },
          { "nombre": "Cantidad de componentes", "valor": "1" },
          { "nombre": "Peso total", "valor": "280 g" },
          { "nombre": "Temporada recomendada", "valor": "Otoño - Invierno" },
          { "nombre": "Instrucciones de cuidado", "valor": "Lavar a mano o en seco, Usar detergente especial, Secar en plano, no exprimir, No usar blanqueador, No planchar, Evitar exposición directa al sol" },
          { "nombre": "Historia del diseño", "valor": "Esta bufanda está inspirada en las trenzas de las mujeres de Chincheros, aportando un profundo sentido de identidad y tradición a cada prenda." }
        ]
      },
      {
        "cardImage": "/imagenes/bufanda.png",
        "modalImage": "/imagenes/bufanda.png",
        "user": "Comercialización",
        "description": "Detalles sobre la comercialización de la prenda.",
        "atributos": [
          { "nombre": "Fecha de disponibilidad", "valor": "24/10/2024" },
          { "nombre": "Costo de producción", "valor": "150" },
          { "nombre": "Valor del mercado aproximado", "valor": "200" },
          { "nombre": "Cantidad mínima de producción", "valor": "10" },
          { "nombre": "Detalles de packaging", "valor": "N/A" },
          { "nombre": "Historia del impacto social de la prenda", "valor": "fomenta el trabajo artesanal y la sostenibilidad en la moda." }
        ]
      }
      ],
      "attributeImages": {
        "Técnica de tejido": "/imagenes/C12.jpeg",
      }
    }



  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [inputCodigo, setInputCodigo] = useState(codigo || "."); // Si no hay código en la URL, usar "1234" por defecto
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
      <h1 className='h1-vista'>Historia del Producto</h1>

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