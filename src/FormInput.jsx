import React, { useState } from 'react'

const FormInput = ({onSubmit}) => {
    const [newTask, setNewTask] = useState("");



    function handleSubmit(e) {
    e.preventDefault();
    if(newTask === '')return

    onSubmit(newTask)

    

    setNewTask("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            type="text"
            id="item"
            placeholder="add task here...."
          />
        </div>
        <button className="btn">Add</button>
      </form>

  )
}

export default FormInput