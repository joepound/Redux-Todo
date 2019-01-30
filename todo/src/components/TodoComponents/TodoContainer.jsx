import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function validateInput(input) {
  return Boolean(input);
}

const TodoContainer = props => {
  // Check if task input for new todo is not an empty string (returns boolean)

  // Action-based method - will fire upon triggering onSubmit
  // const addTodo = e => {
  // Prevent refresh when onSubmit is triggered
  // e.preventDefault();
  // Use input validation method as conditional
  // if (validateInput(this.state.newTaskInput)) {
  //   this.props.addTodo(this.state.newTaskInput);
  //   this.setState({
  //     newTaskInput: ""
  //   });
  // } else {
  // If "required" attribute of an input field have been altered
  //   alert("Please enter a task first.");
  // }
  // };

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
