import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(10);
  };

  return (
    <div>
      <h2>Temporizador</h2>
      <p>{time}s</p>
      <button onClick={startTimer} disabled={isActive}>Iniciar</button>
      <button onClick={stopTimer} disabled={!isActive}>Pausar</button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
}

export default CountdownTimer;
