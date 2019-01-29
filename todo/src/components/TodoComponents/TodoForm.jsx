import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: ""
    };
  }

  /* Action-based methods */

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.taskInput);
    this.setState({
      taskInput: ""
    });
  };

  /* Event handler methods */

  handleTaskInputChange = e => {
    this.setState({
      taskInput: e.currentTarget.value
    });
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

export default TodoForm;
