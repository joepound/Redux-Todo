import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodoCompletion } from "../../store/actions";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = props => {
  return (
    <Fragment>
      <TodoForm addTodo={props.addTodo} />
      <div className="todo-app__list">
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoCompletion={props.toggleTodoCompletion}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default connect(
  state => ({
    todos: state.todosReducer.todos
  }),
  {
    addTodo,
    toggleTodoCompletion
  }
)(TodoContainer);
