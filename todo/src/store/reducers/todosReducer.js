import { ADD_TODO, TOGGLE_TODO_COMPLETION } from "../actions/types";

const initialState = {
  todos: []
};

const generateId = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
};

export default (todosReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
});
