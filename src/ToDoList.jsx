import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Go to the gym",
    "Read a book",
  ]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask() {
    if(newTask.trim() !== "") {
    setTasks(t=>[...t, newTask]);
    setNewTask("");
  }
}
// function handleRenderTask(event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// }
  function handleRemoveTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if(index<tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
      
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="add-button" onClick={handleAddTask}>
          Add 
        </button>
      
        <div className="tasks-display">
        <ol>
            {tasks.map((task, index) => (
            // <li key={index} onClick={() => handleRemoveTask(index)}>
            //   {task}    </li>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="remove-button" onClick={() => handleRemoveTask(index)}>Remove Task</button>
                <button className="up-button move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="down-button move-button" onClick={() => moveTaskDown(index)}>Move Down</button>

                

            </li>
            ))}
        </ol>
        </div>
       
      </div>
    </>
  );
}

export default ToDoList;
