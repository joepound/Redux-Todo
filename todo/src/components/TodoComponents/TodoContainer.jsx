import React, { Fragment } from "react";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = props => {
  return (
    <Fragment>
      <TodoForm />
    </Fragment>
  );
};

export default TodoContainer;