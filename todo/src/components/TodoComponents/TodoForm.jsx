import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTodo } from "../../store/actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: ""
    };
  }

  // Check if task input for new todo is not an empty string (returns boolean)
  validateInput(input) {
    return Boolean(input);
  }

  /* Event handler methods */

  // For controlling value of new task input form
  handleTaskInputChange = e => {
    this.setState({
      taskInput: e.currentTarget.value
    });
  };

  // Action-based method - will fire upon triggering onSubmit
  addTodo = e => {
    // Prevent refresh when onSubmit is triggered
    e.preventDefault();

    // Use input validation method as conditional
    if (this.validateInput(this.state.taskInput)) {
      this.props.addTodo(this.state.taskInput);
      this.setState({
        taskInput: ""
      });
    } else {
      // If "required" attribute of an input field have been altered
      alert("Please enter a task first.");
    }
  };

  render() {
    return (
      <form className="todo-app__new-todo-form" onSubmit={this.addTodo}>
        <input
          className="todo-app__new-todo-form__task-input"
          placeholder="Enter a task"
          value={this.state.taskInput}
          onChange={this.handleTaskInputChange}
          required
        />
        <button className="todo-app__new-todo-form__add-btn" type="submit">
          +
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    addTodo
  }
)(TodoForm);
