import { ADD_NEW_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now().toString(), title: action.payload, isDone: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
