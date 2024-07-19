import React, { useState, useEffect } from 'react';
import { PaisesLatinos } from './Paises';
import './MostrarCapital.css'; // Archivo CSS opcional para estilos

export const MostrarCapital = () => {
  const [inputValue, setInputValue] = useState('');
  const [pais, setPais] = useState('');
  const [capital, setCapital] = useState('');

  useEffect(() => {
    if (pais) {
      const paisEncontrado = PaisesLatinos.find(p => p.pais.toLowerCase() === pais.toLowerCase());
      if (paisEncontrado) {
        setCapital(paisEncontrado.capital);
      } else {
        setCapital('Capital no encontrada');
      }
    }
  }, [pais]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowCapital = () => {
    setPais(inputValue);
  };

  return (
    <div>
      <input 
        type="text" 
        className='input-seleccion' 
        placeholder='Escribe el país del que deseas mostrar la capital' 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleShowCapital}>Mostrar capital</button>
      <h1 className='capital'>{capital}</h1>
    </div>
  );
};
