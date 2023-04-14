import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import ListOfTask from "./ListOfTask";

export default function App() {
  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEMS')
    if(localValue === null) return[]

    return JSON.parse(localValue)
  });


  useEffect(()=>{
    localStorage.setItem('ITEMS',JSON.stringify(todos))
  },[todos])

 function addTodo(title){
  setTodos((currentTask) => {
    return [
      ...currentTask,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ];
  });
 }


  // to checkbox 
  function toggleTodo(id, completed) {
    setTodos((currentTask) => {
      return currentTask.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }


  //for deleting task
  function deleteTask(id){
    setTodos((currentTask) =>{
      return currentTask.filter(todo => todo.id !== id)
    })

  }

  return (
    <>
      <FormInput onSubmit={addTodo}/>
      


      {/* the output design */}
      <h1 className="header">Todo List</h1>


      <ListOfTask todos={todos} toggleTodo={toggleTodo} deleteTask={deleteTask}/>
      
    </>
  );
}
