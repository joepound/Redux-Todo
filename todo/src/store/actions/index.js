import axios from "axios";

import {
  ERROR_STATE,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  DELETE_TODO_ITEM,
  CLEAR_COMPLETED_TODOS
} from "./types";

const generateId = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
};

export const getTodos = () => dispatch => {
  dispatch({ type: FETCH_TODOS_START });
  axios
    .get("http://localhost:5000/api/todos")
    .then(res => dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data }))
    .catch(error =>
      dispatch({ type: ERROR_STATE, payload: "Error in getting todo data" })
    );
};

export const handleTextInputChange = (key, input) => ({
  type: HANDLE_TEXT_INPUT_CHANGE,
  payload: {
    key,
    input
  }
});

export const addTodo = task => dispatch => {
  const newTodo = {
    id: generateId(),
    task,
    completed: false
  };
  axios
    .post("http://localhost:5000/api/todos", newTodo)
    .then(res => dispatch({ type: ADD_TODO, payload: res.data }))
    .catch(error =>
      dispatch({ type: ERROR_STATE, payload: "Error in posting todo data" })
    );
};

export const toggleTodoCompletion = id => dispatch => {
  axios
    .put(`http://localhost:5000/api/todos/${id}`)
    .then(res => dispatch({ type: TOGGLE_TODO_COMPLETION, payload: res.data }))
    .catch(error =>
      dispatch({
        type: ERROR_STATE,
        payload: "Error in toggling todo completion status"
      })
    );
};

export const deleteTodoItem = id => dispatch => {
  axios
    .delete(`http://localhost:5000/api/todos/${id}`)
    .then(res => dispatch({ type: DELETE_TODO_ITEM, payload: res.data }))
    .catch(error =>
      dispatch({
        type: ERROR_STATE,
        payload: "Error in deleting todo item"
      })
    );
};

export const clearCompletedTodos = todos => dispatch => {
  let updatedTodos = todos;
  let completedTodos = todos.filter(todo => todo.completed);

  let action = { type: CLEAR_COMPLETED_TODOS, payload: updatedTodos };

  let deleteItem = id =>
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then(res => dispatch({ type: DELETE_TODO_ITEM, payload: res.data }))
      .catch(
        error =>
          (action = {
            type: ERROR_STATE,
            payload: "Error in removing completed todos"
          })
      );

  for (let i = 0; i < completedTodos.length; i++) {
    deleteItem(completedTodos[i].id);
    if (action.type === ERROR_STATE) {
      break;
    }
  }
};
