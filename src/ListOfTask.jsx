import EachTask from "./EachTask";

export default function ListOfTask({todos , toggleTodo, deleteTask }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Task Here Add Some"}
      {todos.map((todo) => {
        return (
          <EachTask {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTask={deleteTask}/>
        );
      })}
    </ul>
  );
}
