import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearCompletedTodos } from "../../store/actions";

const ClearCompletedTodosButton = props => {
  return (
    <div
      className="todo-app__action-btns__clear-completed"
      onClick={props.clearCompletedTodos}
    >
      Clear Completed
    </div>
  );
};

ClearCompletedTodosButton.propTypes = {
  clearCompletedTodos: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    clearCompletedTodos
  }
)(ClearCompletedTodosButton);
