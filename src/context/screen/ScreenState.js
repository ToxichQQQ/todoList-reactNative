import {ScreenContext} from "./ScreenContext";
import {screenReducer} from "./screenReducer";
import {SET_TODO_ID} from "../types";
import React, {useReducer} from "react";


export const ScreenState = ({children}) => {
    const [state,dispatch] = useReducer(screenReducer,null)

    const handleChangeScreen = id => {
        dispatch({type:SET_TODO_ID,payload:id})
    }


    return <ScreenContext.Provider value={{
        handleChangeScreen,
        todoId:state
    }}>{children}</ScreenContext.Provider>
}
