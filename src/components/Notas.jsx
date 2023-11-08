import React from 'react'

export const Notas = () => {
  const tipo = nombre.length > 4 ? 'nota-negra' : 'nota-blanca';

  return (
    <li className={tipo}>
      {nombre} - {frecuencia} Hz - Tipo: {tipo}
    </li>
  );
}
