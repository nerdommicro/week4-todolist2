import { useState } from "react";

function TodoForm(addTodo) {
  const [input, setInput] = useState("");

  const handleSaveInput = () => {
    var inputbox = document.getElementById("inputbox");
    setInput(inputbox.value);
  };
  const submitTodo = (evt) => {
    evt.preventDefault();
    var inputbox = document.getElementById("inputbox");
    if (inputbox.value === "") {
      console.log("todo is empty");
      return;
    } else {
      addTodo(inputbox.value);
    }
  };
  return (
    <>
      <form onSubmit={() => submitTodo()}>
        <h1>ToDo App</h1>
        <h2>Add new todos via the input field:</h2>
        <input type="text" id="inputbox" onChange={() => handleSaveInput()} />
        <button type="submit">Add To Do</button>
      </form>
    </>
  );
}

export default TodoForm;
