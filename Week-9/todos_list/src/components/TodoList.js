import React from "react";
import Todo from "./Todo";

function TodoList({ todos, completeTodo }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.text.toString()}
        todo={todo}
        completeTodo={completeTodo}
      />
    );
  });
}

export default TodoList;
