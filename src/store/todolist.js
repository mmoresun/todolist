import { v4 as uuid } from 'uuid'

export const todolist = [

    { todoName: 'Make a todo list', done: true, favorite: false, edit: false, id: uuid() },
    { todoName: 'Check off the first thing of todo list', done: false, favorite: false, edit: false, id: uuid() },
    { todoName: 'Realise I have completed 2 things on the list', done: false, favorite: false, edit: false, id: uuid() },
    { todoName: 'Do nothing', done: true, favorite: true, edit: false, id: uuid() },
    { todoName: 'Do more nothing', done: false, favorite: true, edit: false, id: uuid() },
    { todoName: 'Reward myself with a nap', done: false, favorite: true, edit: false, id: uuid() }

  ]