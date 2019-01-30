import React from "react";

import ClearCompletedTodosButtom from "./ClearCompletedTodosButton";
import AddTodoButton from "./AddTodoButton";

const ActionButtonsContainer = props => {
  return (
    <div className="todo-app__action-btns">
      <ClearCompletedTodosButtom />
      <AddTodoButton />
    </div>
  );
};

export default ActionButtonsContainer;
