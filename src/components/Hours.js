// Placeholder to host a component

// components/Hours.js
// components/Hours.js
import React, { useEffect, useState } from 'react';

const Hours = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    setTime(`Son las ${currentHours}:${currentMinutes < 10 ? '0' : ''}${currentMinutes}`);
  }, []);

  if (!time) {
    return null; // O puedes devolver un indicador de carga
  }

  return (
    <div>
      <h2>Hora actual:</h2>
      <p>{time}</p>
    </div>
  );
};

export default Hours;
