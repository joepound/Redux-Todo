import {
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  HANDLE_TEXT_INPUT_CHANGE,
  CLEAR_COMPLETED_TODOS
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
      console.log(action.payload);
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
