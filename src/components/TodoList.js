import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            {t.text}
            <button onClick={() => toggleTask(i)}>
              {t.completed ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => removeTask(i)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
