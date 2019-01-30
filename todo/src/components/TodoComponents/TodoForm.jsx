import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleTextInputChange, addTodo } from "../../store/actions";

class TodoForm extends Component {
  static propTypes = {
    newTaskInput: PropTypes.string.isRequired,
    handleTextInputChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleTextInputChange("newTaskInput", "");
  }

  handleInputChange = e => {
    this.props.handleTextInputChange(
      e.currentTarget.name,
      e.currentTarget.value
    );
  };

  render() {
    return (
      <form className="todo-app__new-todo-form" onSubmit={this.props.addTodo}>
        <input
          className="todo-app__new-todo-form__task-input"
          placeholder="Enter a task"
          name="newTaskInput"
          onChange={this.handleInputChange}
          value={this.props.newTaskInput}
          required
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    newTaskInput: state.todosReducer.newTaskInput
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    addTodo
  }
)(TodoForm);
