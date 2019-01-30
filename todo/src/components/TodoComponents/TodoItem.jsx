import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleTodoCompletion, deleteTodoItem } from "../../store/actions";

const TodoItem = props => {
  const toggleTodoCompletion = e => props.toggleTodoCompletion(props.todo.id);
  const deleteTodoItem = e => props.deleteTodoItem(props.todo.id);

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
      <div className="todo-app__list__item__actions">
        <input
          className={
            props.todo.completed
              ? "todo-app__list__item__actions__toggle-completion-btn--completed"
              : "todo-app__list__item__actions__toggle-completion-btn--incomplete"
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
        <input
          className="todo-app__list__item__actions__delete-btn"
          type="image"
          src="images/delete-todo.png"
          alt="Delete todo item"
          onClick={deleteTodoItem}
        />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodoCompletion: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    toggleTodoCompletion,
    deleteTodoItem
  }
)(TodoItem);
