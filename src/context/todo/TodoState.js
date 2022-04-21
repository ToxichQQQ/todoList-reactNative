import React, {useReducer} from 'react'
import {TodoContext} from "./TodoContext";
import {todoReducer} from "./todoReducer";

export const TodoState = ({children}) => {
    const initialState = {
        todos:[
            { id: Date.now().toString(), title: "Дать пизды Сане", isDone: false }
        ]
    }
    const [state,dispatch] = useReducer(todoReducer,initialState)

    return <TodoContext.Provider value={{todos:state.todos}}>{children}</TodoContext.Provider>
}