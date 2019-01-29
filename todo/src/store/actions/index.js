import { ADD_TODO, TOGGLE_TODO_COMPLETION } from "./types";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: {
    task
  }
});
export const toggleTodoCompletion = id => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id
});
