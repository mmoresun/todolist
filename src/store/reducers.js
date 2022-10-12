// this is a list of all reducers

import { combineReducers } from "redux";
import { todoReducer } from './todoreducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({

    // initializing todo reducer

    todos: todoReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }

export const myPersistReducer = persistReducer(persistConfig, rootReducer);