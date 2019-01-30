import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = props => {
  return (
    <Fragment>
      <TodoForm />
      <div className="todo-app__list">
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Fragment>
  );
};

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

// Contains anonymous callback used as the mapStateToProps method
export default connect(state => ({
  todos: state.todosReducer.todos
}))(TodoContainer);
