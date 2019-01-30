import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearCompletedTodos } from "../../store/actions";

const ClearCompletedTodosButton = props => {
  const clearCompletedTodos = () => {
    if (
      props.todos.filter(todo => todo.completed).length > 0 &&
      window.confirm(
        // Confirmation dialog for clearing the completed todos
        "Are you sure you want to delete all completed todos?"
      )
    ) {
      props.clearCompletedTodos(props.todos);
    }
  };

  return (
    <div
      className="todo-app__action-btns__clear-completed"
      onClick={clearCompletedTodos}
    >
      Clear Completed
    </div>
  );
};

ClearCompletedTodosButton.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  clearCompletedTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  };
};

export default connect(
  mapStateToProps,
  {
    clearCompletedTodos
  }
)(ClearCompletedTodosButton);
