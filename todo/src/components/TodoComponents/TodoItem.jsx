import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  const toggleTodoCompletion = e => props.toggleTodoCompletion(props.todo.id);

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
        onClick={toggleTodoCompletion}
      />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodoCompletion: PropTypes.func.isRequired
};

export default TodoItem;
