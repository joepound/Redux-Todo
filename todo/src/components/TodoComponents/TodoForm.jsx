import React from "react";

const TodoForm = props => {
  return (
    <form className="todo-app__add-form">
      <input
        className="todo-app__add-form__task-input"
        placeholder="Enter a task"
      />
    </form>
  );
};

export default TodoForm;
