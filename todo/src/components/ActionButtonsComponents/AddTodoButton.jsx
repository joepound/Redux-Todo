import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleTextInputChange, addTodo } from "../../store/actions";

// Check if task input for new todo is not an empty string (returns boolean)
function validateInput(input) {
  return Boolean(input);
}

const AddTodoButton = props => {
  // Action-based method - will fire upon triggering onSubmit in the TodoForm
  const addTodo = e => {
    // Prevent refresh when onSubmit is triggered
    e.preventDefault();

    // Use input validation method as conditional
    if (validateInput(props.newTaskInput)) {
      props.addTodo(props.newTaskInput);
      props.handleTextInputChange("newTaskInput", "");
    } else {
      // If "required" attribute of an input field have been altered
      alert("Please enter a task first.");
    }
  };

  return (
    <div className="todo-app__action-btns__add-todo" onClick={addTodo}>
      +
    </div>
  );
};

AddTodoButton.propTypes = {
  newTaskInput: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

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
)(AddTodoButton);
