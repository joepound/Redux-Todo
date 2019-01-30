import React from "react";

import AddTodoButton from "./AddTodoButton";

const ActionButtonsContainer = props => {
  return (
    <div className="todo-app__action-btns">
      <AddTodoButton />
    </div>
  );
};

export default ActionButtonsContainer;
