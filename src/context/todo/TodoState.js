import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";
import {Alert} from 'react-native'
import { ADD_NEW_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      { id: Date.now().toString(), title: "Дать пизды Сане", isDone: false },
    ],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (title) =>
    dispatch({ type: ADD_NEW_TODO, payload: title });

  const handleRemoveTodo = (id) => {
          Alert.alert(
              "Delete this Todo",
              `Do you really want to delete this todo?`,
              [
                  {text: "Cancel", style: "cancel"},
                  {
                      text: "Delete",
                      style: "destructive",
                      onPress: () =>  dispatch({type: DELETE_TODO, payload: id}),
                  },
              ],
              {cancelable: false}
          );
      };

  const handleUpdateTodo = (id, title) =>
    dispatch({ type: UPDATE_TODO, payload: { id, title } });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        handleAddTodo,
        handleRemoveTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
