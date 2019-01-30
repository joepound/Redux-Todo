import {
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION
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
