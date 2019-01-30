import {
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  DELETE_TODO_ITEM,
  CLEAR_COMPLETED_TODOS
} from "../actions/types";

import sampleTodoData from "../../sampleTodoData";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || sampleTodoData,
  newTaskInput: ""
};

const generateId = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.input
      };
    case ADD_TODO:
      const newTodo = {
        id: generateId(),
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO_COMPLETION:
      const todos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todos
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case CLEAR_COMPLETED_TODOS:
      const incompleteTodos = state.todos.filter(todo => !todo.completed);
      return {
        ...state,
        todos:
          // Check first if there are any completed todos before firing the confirmation dialog
          state.todos.length - incompleteTodos.length > 0 && // Used && for short-circuit evaluation of conditional expression
          window.confirm(
            // Confirmation dialog for clearing the completed todos
            "Are you sure you want to delete all completed todos?"
          )
            ? incompleteTodos
            : state.todos
      };
    default:
      return state;
  }
};

export default todosReducer;
