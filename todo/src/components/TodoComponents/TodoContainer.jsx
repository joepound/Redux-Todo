import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = props => {
  return (
    <>
      <TodoForm />
      <div className="todo-app__list">
        {props.todos &&
          props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </>
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

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  };
};

export default connect(mapStateToProps)(TodoContainer);
