import "./App.css";
import TodoList from "./Todolist";
import { useState } from "react";
import { tododata } from "./STORE";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState(tododata);

  const completeTodo = (id) => {
    const temp = [...todos];
    const index = temp.findIndex((item) => item.id === id);
    temp[index].isCompleted = !temp[index].isCompleted;
    setTodos(temp);
  };

  const deleteTodo = (id) => {
    const temp = [...todos];
    const index = temp.findIndex((item) => item.id === id);
    temp.splice(index, 1);
    setTodos(temp);
  };

  const addTodo = (todotext) => {
    const temp = [
      ...todos,
      {
        id: uuidv4(),
        text: `${todotext}`,
        isCompleted: false
      }
    ];
    setTodos(temp);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList
        items={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
