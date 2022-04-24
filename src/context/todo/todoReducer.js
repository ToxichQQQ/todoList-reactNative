import {
  ADD_NEW_TODO,
  CLEAR_ERROR,
  DELETE_TODO,
  FETCH_TODOS,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO
} from "../types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, title: action.payload.title},
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
    case FETCH_TODOS:
      return {...state,todos: action.payload}
    case SHOW_LOADER:
      return  {...state,showLoader:true}
    case HIDE_LOADER:
      return {...state,showLoader: false}
    case SHOW_ERROR:
          return {...state,error: action.payload}
    case CLEAR_ERROR:
      return  {...state,error:null}
    default:
      return state;
  }
};
