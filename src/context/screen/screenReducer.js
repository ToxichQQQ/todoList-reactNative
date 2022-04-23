import {SET_TODO_ID} from "../types";


export const screenReducer = (state,action) => {
    switch (action.type) {
        case SET_TODO_ID:
            return action.payload
        default:
            return state
    }
}

