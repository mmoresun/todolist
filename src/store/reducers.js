// this is a list of all reducers

import { combineReducers } from "redux";
import { todoReducer } from './todoreducer';

export const rootReducer = combineReducers({

    // initializing todo reducer

    todos: todoReducer,
})