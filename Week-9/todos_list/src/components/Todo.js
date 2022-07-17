import React from "react";

function Todo({ todo, completeTodo }) {
  return (
    <div
      onClick={() => completeTodo(todo.id)}
      className="todo"
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
    >
      {todo.text}
    </div>
  );
}

export default Todo;
