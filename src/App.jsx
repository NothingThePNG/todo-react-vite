import TodoInput from "./componates/TodoInput"
import TodoList from "./componates/todoList"
import { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  function hadalAddTodoes(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    localStorage.setItem("todos", newTodoList);
  }

  function handalDeletTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    localStorage.setItem("todos", newTodoList);
  }

  useEffect(() => {
  if (!localStorage){
    return
  }

  let localTodos = localStorage.getItem("todos");

  if (!localTodos) {
    return
  }

  localTodos = JSON.parse(localTodos).todos;
  setTodos(localTodos);
}, [])

  return (
    <main>
      <TodoInput hadalAddTodoes={hadalAddTodoes} />
      <TodoList todos={todos} handalDeletTodo={handalDeletTodo} />
    </main>
  )
}

export default App
