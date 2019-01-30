import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleTodoCompletion } from "../../store/actions";

const TodoItem = props => {
  const toggleTodoCompletion = e => props.toggleTodoCompletion(props.todo.id);

  return (
    <div className="todo-app__list__item">
      <p
        className={
          props.todo.completed
            ? "todo-app__list__item__task--completed"
            : "todo-app__list__item__task"
        }
      >
        • {props.todo.task}
      </p>
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

export default connect(
  null,
  {
    toggleTodoCompletion
  }
)(TodoItem);
