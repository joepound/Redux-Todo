import {
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  HANDLE_TEXT_INPUT_CHANGE
} from "../actions/types";

const initialState = {
  todos: [
    {
      id: "439856382475698734265",
      task: "Learn React hooks",
      completed: false
    },
    {
      id: "247569439856388734265",
      task: "Learn Redux",
      completed: true
    },
    {
      id: "569873424398563824765",
      task: "Learn TypeScript",
      completed: false
    }
  ],
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
      console.log(action.payload)
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
};

export default todosReducer;
