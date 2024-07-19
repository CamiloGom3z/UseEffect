import React, { useEffect, useState } from 'react';
import './Temporizador.css';

export const Temporizador = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const incrementTime = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const startTime = () => {
    setIsRunning(true);
  };

  const pauseTime = () => {
    setIsRunning(false);
  };

  const resetTime = () => {
    setCounter(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(incrementTime, 1000); 
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="temporizador-container">
      <h1 className="temporizador-heading">Temporizador {counter}sg</h1>
      <button className="temporizador-button" onClick={startTime}>
        Iniciar
      </button>
      <button className="temporizador-button" onClick={pauseTime}>
        Pausar
      </button>
      <button className="temporizador-button" onClick={resetTime}>
        Resetear
      </button>
    </div>
  );
};
