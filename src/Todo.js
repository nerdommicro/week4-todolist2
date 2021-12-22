function Todo({ item, completeTodo, deleteTodo }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => completeTodo(item.id)}
      />
      <span style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
        {item.text}
      </span>
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </li>
  );
}

export default Todo;
