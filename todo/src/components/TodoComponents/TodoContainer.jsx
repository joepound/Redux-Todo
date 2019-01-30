import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTodos } from "../../store/actions";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoContainer extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        task: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.todos = this.props.getTodos();
  }

  render() {
    return (
      <>
        <TodoForm />
        <div className="todo-app__list">
          {this.props.todos &&
            this.props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  };
};

export default connect(
  mapStateToProps,
  {
    getTodos
  }
)(TodoContainer);
