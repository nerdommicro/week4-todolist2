import Todo from "./Todo";

function TodoList({ items, completeTodo, deleteTodo }) {
  const list = items.map((todo) => {
    return (
      <Todo
        key={todo.id}
        item={todo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default TodoList;
