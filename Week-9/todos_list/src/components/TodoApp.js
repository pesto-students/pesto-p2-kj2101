import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="header">Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoApp;
