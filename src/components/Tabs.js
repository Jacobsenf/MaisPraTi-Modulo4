import React from 'react';

function Tabs({ onTabChange }) {
  return (
    <div className="tabs">
      <button onClick={() => onTabChange(0)}>Contador</button>
      <button onClick={() => onTabChange(1)}>Fundo</button>
      <button onClick={() => onTabChange(2)}>Temporizador</button>
      <button onClick={() => onTabChange(3)}>Dados</button>
      <button onClick={() => onTabChange(4)}>Registro</button>
      <button onClick={() => onTabChange(5)}>Tarefas</button>
      <button onClick={() => onTabChange(6)}>Contagem</button>
      <button onClick={() => onTabChange(7)}>Filtro</button>
      <button onClick={() => onTabChange(8)}>Galeria</button>
    </div>
  );
}

export default Tabs;
