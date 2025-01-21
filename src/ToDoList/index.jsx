import React, { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { task: "Fare la spesa", completed: false },
    { task: "Portare fuori il cane", completed: false },
  ]);

  const [doneTasks, setDoneTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  // Sposta una task da "tasks" a "doneTasks" o viceversa
  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks[index];

    // Sposta nella lista completate
    setDoneTasks([...doneTasks, { ...taskToMove, completed: true }]);

    // Rimuovi dalla lista originale
    const filteredTasks = updatedTasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  // Aggiunge una nuova task
  const handleAddTask = (newTask) => {
    if (newTask.trim() === "") {
      alert("La task non può essere vuota.");
      return;
    }
    setTasks([...tasks, { task: newTask, completed: false }]);
  };

  // Elimina una task e la sposta in "deletedTasks"
  const handleDeleteTask = (index) => {
    const taskToDelete = tasks[index];
    setDeletedTasks([...deletedTasks, taskToDelete]);
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  // Recupera una task eliminata
  const handleRecoverDeletedTask = (index) => {
    const taskToRecover = deletedTasks[index];
    setTasks([...tasks, taskToRecover]);
    const filteredDeletedTasks = deletedTasks.filter((_, i) => i !== index);
    setDeletedTasks(filteredDeletedTasks);
  };

  // Recupera una task completata
  const handleRecoverDoneTask = (index) => {
    const taskToRecover = doneTasks[index];
    setTasks([...tasks, { ...taskToRecover, completed: false }]);
    const filteredDoneTasks = doneTasks.filter((_, i) => i !== index);
    setDoneTasks(filteredDoneTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <h2>Tasks</h2>
        {tasks.map((t, index) => (
          <div key={index} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span>{t.task}</span>
            <button onClick={() => handleDeleteTask(index)}>Elimina</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Done Tasks</h2>
        {doneTasks.map((t, index) => (
          <div key={index} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ textDecoration: "line-through" }}>{t.task}</span>
            <button onClick={() => handleRecoverDoneTask(index)}>Recupera</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Deleted Tasks</h2>
        {deletedTasks.map((t, index) => (
          <div key={index} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span>{t.task}</span>
            <button onClick={() => handleRecoverDeletedTask(index)}>Recupera</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Nuova task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default ToDoList;