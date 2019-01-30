import {
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  DELETE_TODO_ITEM,
  CLEAR_COMPLETED_TODOS
} from "../actions/types";

import sampleTodoData from "../../sampleTodoData";

const generateId = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
};

const getFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
};

const setOnLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  todos: getFromLocalStorage("todos") || sampleTodoData,
  newTaskInput: ""
};

const todosReducer = (state = initialState, action) => {
  let updatedTodos;

  switch (action.type) {
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.input
      };
    case ADD_TODO:
      updatedTodos = [
        ...state.todos,
        {
          id: generateId(),
          task: action.payload,
          completed: false
        }
      ];
      setOnLocalStorage("todos", updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      };
    case TOGGLE_TODO_COMPLETION:
      updatedTodos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      setOnLocalStorage("todos", updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      };
    case DELETE_TODO_ITEM:
      updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      setOnLocalStorage("todos", updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      };
    case CLEAR_COMPLETED_TODOS:
      updatedTodos = state.todos.filter(todo => !todo.completed);

      if (
        // Check first if there are any completed todos before firing the confirmation dialog
        // Used && for short-circuit evaluation of conditional expression
        state.todos.length - updatedTodos.length > 0 &&
        window.confirm(
          // Confirmation dialog for clearing the completed todos
          "Are you sure you want to delete all completed todos?"
        )
      ) {
        setOnLocalStorage("todos", updatedTodos);
        return {
          ...state,
          todos: updatedTodos
        };
      }
    default:
      return state;
  }
};

export default todosReducer;
