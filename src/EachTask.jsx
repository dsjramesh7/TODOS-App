import React from "react";

const EachTask = ({id,completed,title,toggleTodo,deleteTask}) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
          onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default EachTask;
