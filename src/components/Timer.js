import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <h1>Tempo: {time}s</h1>
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={() => setIsRunning(false)}>Pausar</button>
      <button onClick={() => setTime(0)}>Reiniciar</button>
    </div>
  );
}

export default Timer;
