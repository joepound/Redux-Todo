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
      <input
        className={
          props.todo.completed
            ? "todo-app__list__item__toggle-completion-btn--completed"
            : "todo-app__list__item__toggle-completion-btn--incomplete"
        }
        type="image"
        src={
          props.todo.completed
            ? "images/complete-task.png"
            : "images/incomplete-task.png"
        }
        alt="Toggle completion status"
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
