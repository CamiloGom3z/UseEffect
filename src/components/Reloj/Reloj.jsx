import React, { useState, useEffect } from 'react';

export const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Intervalo de limpieza al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <h2>Hora actual</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};


