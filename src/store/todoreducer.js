
// this is todo reducer. it holds actions, that changes the state

import { todolist } from "./todolist"
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_DONE, TOGGLE_TODO_FAVORITE, TOGGLE_TODO_EDIT, EDIT_TODO } from './todoactions'

// creating new reducer with initialstate get from todolist.js

export const todoReducer = (state = todolist, action) => {

    switch (action.type) {

        // here's a list of actions: ADD_TODO, DELETE_TODO, etc.

        // add new item

        case ADD_TODO: {

            return [...state, action.payload] // adding new todo item object to existing array of todos objects

        }

        // delete item

        case DELETE_TODO: {

            const { id } = action.payload

            return [...state.filter((item) => item.id !== id)]  // filtering the state so that all elements remain, except for the one containing the specified id
        }

        case TOGGLE_TODO_DONE: {

            const { id, done } = action.payload

            return [...state.map((item) => {
                if (item.id === id) {
                    return { ...item, done: !done }
                }

                return item
            })]

        }

        case TOGGLE_TODO_FAVORITE: {

            const { id, favorite } = action.payload

            return [...state.map((item) => {
                if (item.id === id) {
                    return { ...item, favorite: !favorite }
                }

                return item
            })]

        }

        case TOGGLE_TODO_EDIT: {

            const { id, edit } = action.payload

            return [...state.map((item) => {
                if (item.id === id) {
                    return { ...item, edit: !edit }
                }

                return item
            })]

        }

        case EDIT_TODO: {

            const { id, todoName } = action.payload

            if (todoName) return [...state.map((item) => {

                if (item.id === id) {
                    return { ...item, todoName: todoName }
                }

                return item
            })]
        }

        break
        
        default: // default action

            return state
    }
}