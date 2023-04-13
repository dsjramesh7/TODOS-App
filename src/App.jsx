import { useState } from "react";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewTask(currentTask => {
      return [
        ...currentTask,
        {
          id: crypto.randomUUID(),
          title: newTask,
          completed: false,
        },
      ]
    })

    setNewTask("");
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input
            type="text"
            id="item"
            placeholder="add task here...."
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>

    </>
  );
}
