import React from "react";

const TodoItem = props => {
  return (
    <div className="todo-app__list__item">
      <div className="todo-app__list__item__task">• {props.todo.task}</div>
      <img
        className="todo-app__list__item__toggle-completion-btn"
        src={
          props.todo.completed
            ? "images/complete-task.png"
            : "images/incomplete-task.png"
        }
        alt="Toggle completion"
      />
    </div>
  );
};

export default TodoItem;
