import { ADD_TODO, TOGGLE_TODO_COMPLETION } from "../actions/types";

const initialState = {
  todos: [
    {
      id: "439856382475698734265",
      task: "Sample todo.",
      completed: false
    }
  ]
};

const generateId = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: generateId(),
        task: action.payload.task,
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
};

export default todosReducer;
