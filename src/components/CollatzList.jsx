import React from 'react'

export const CollatzList = ({ numbers, sequences })=> {
  return (
        <div className='container'>
          {numbers.map((num, index) => (
            <p key={index}>
              Secuencia para {num}: {sequences[index].join(" -> ")}
            </p>
          ))}
        </div>
      );
  
}
