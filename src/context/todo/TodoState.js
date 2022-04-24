import React, {useReducer} from "react";
import {TodoContext} from "./TodoContext";
import {todoReducer} from "./todoReducer";
import {Alert} from 'react-native'
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
import {url} from "../../constans";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        showLoader: false,
        error: null
    };
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleAddTodo = async (title) => {
        const response = await fetch(`${url}/todos.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title})
        })
        const data = await response.json()
        dispatch({type: ADD_NEW_TODO, payload: {title, id: data.name}});
    }

    const handleRemoveTodo = (id) => {
        Alert.alert(
            "Delete this Todo",
            `Do you really want to delete this todo?`,
            [
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () =>{
                        await fetch(`${url}/todos/${id}.json`,{
                            method:'DELETE',
                            headers: {'Content-Type': 'application/json'}
                        })
                        dispatch({type: DELETE_TODO, payload: id})}
                },
            ],
            {cancelable: false}
        );
    };

    const handleUpdateTodo = async (id, title) => {
        handleClearError()
        try {
            await fetch(`${url}/todos/${id}.json`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title})
            })
            dispatch({type: UPDATE_TODO, payload: {id, title}});
        }catch (e) {
            handleShowError(`Something went wrong! Error message ${e}`)
        }
    }
    const handleFetchTodos = async () => {
        handleShowLoader()
        handleClearError()
        try {
            const response = await fetch(`${url}/todos.json`,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                })
            const data = await response.json()
            const todos = Object.keys(data).map(key => ({...data[key], id: key}))
            dispatch({type: FETCH_TODOS, payload: todos})
        }catch (e) {
            handleShowError(`Something went wrong! Error message ${e}`)
        }finally {
            handleHideLoader()
        }
    }

    const handleShowLoader = () => dispatch({type: SHOW_LOADER})

    const handleHideLoader = () => dispatch({type: HIDE_LOADER})

    const handleShowError = (error) => dispatch({type: SHOW_ERROR, payload: error})

    const handleClearError = () => dispatch({type: CLEAR_ERROR})

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                error: state.error,
                showLoader: state.showLoader,
                handleAddTodo,
                handleRemoveTodo,
                handleUpdateTodo,
                handleFetchTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
