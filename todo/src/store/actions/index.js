import {
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  DELETE_TODO_ITEM,
  CLEAR_COMPLETED_TODOS
} from "./types";

export const handleTextInputChange = (key, input) => ({
  type: HANDLE_TEXT_INPUT_CHANGE,
  payload: {
    key,
    input
  }
});

export const addTodo = task => ({
  type: ADD_TODO,
  payload: task
});

export const toggleTodoCompletion = id => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id
});

export const deleteTodoItem = id => ({
  type: DELETE_TODO_ITEM,
  payload: id
});

export const clearCompletedTodos = () => ({
  type: CLEAR_COMPLETED_TODOS
});
