import React, { useState, useEffect } from 'react';
import Notas from './Notas';

export const NotasTipo = () => {
  const [notasData, setNotasData] = useState(null);

 

  useEffect(() => {
    fetch('/notas.json')
      .then((response) => response.json())
      .then((data) => {
        const notasConTipo = {};

        for (const nota in data.NotasPiano) {
          const nombre = data.NotasPiano[nota].nombre;
          const tipo = nombre.length > 3 ? 'nota-negra' : 'nota-blanca';
          notasConTipo[nota] = { ...data.NotasPiano[nota], tipo };
        }

        setNotasData({ NotasPiano: notasConTipo });
      })
      .catch((error) => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  return (
    <div>
      <h1>Notas de Piano</h1>
      {notasData && (
        <ul>
          {Object.keys(notasData.NotasPiano).map((nota) => (
            <Notas
              key={nota}
              nombre={notasData.NotasPiano[nota].nombre}
              frecuencia={notasData.NotasPiano[nota].frecuencia}
              onClick={() => reproducirSonido(notasData.NotasPiano[nota].frecuencia)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};


