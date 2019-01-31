import {
  ERROR_STATE,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  DELETE_TODO_ITEM,
  CLEAR_COMPLETED_TODOS
} from "../actions/types";

let initialState = {
  isLoading: false,
  todos: [],
  newTaskInput: "",
  error: ""
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_STATE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_TODOS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        error: ""
      };
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.input
      };
    case ADD_TODO:
    case TOGGLE_TODO_COMPLETION:
    case DELETE_TODO_ITEM:
    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default todosReducer;
