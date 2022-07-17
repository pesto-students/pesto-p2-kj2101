import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isComplete: false,
      });
    }
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="todo-text"
        onChange={handleChange}
      />
    </form>
  );
}

export default TodoForm;
