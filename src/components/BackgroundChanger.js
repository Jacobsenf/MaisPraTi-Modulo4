import React, { useState, useEffect } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div>
      <h1>Cor Atual: {color}</h1>
      <button onClick={() => setColor(generateRandomColor())}>
        Mudar Cor
      </button>
    </div>
  );
}

export default BackgroundColorChanger;
