import React, { Fragment } from "react";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = props => {
  return (
    <Fragment>
      <TodoForm />
      <div className="todo-app__list">
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <div className="todo-app__list__add-todo-btn">+</div>
      </div>
    </Fragment>
  );
};

export default connect(state => ({
  todos: state.todosReducer.todos
}))(TodoContainer);
