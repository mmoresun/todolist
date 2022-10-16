
import React from 'react';
import './TodoItem.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { DELETE_TODO, TOGGLE_TODO_DONE, TOGGLE_TODO_FAVORITE, TOGGLE_TODO_EDIT, EDIT_TODO } from '../../store/todoactions';


const TodoItem = ({ data, ...item }) => {

    const dispatch = useDispatch()

    const toggleItemFav = (item) => {

        dispatch(
            {
                type: TOGGLE_TODO_FAVORITE,
                payload: item
            }
        )
    }

    const toggleItemDone = (item) => {

        dispatch(
            {
                type: TOGGLE_TODO_DONE,
                payload: item
            }
        )
    }

    const toggleItemEdit = (item) => {

        dispatch(
            {
                type: TOGGLE_TODO_EDIT,
                payload: item
            }
        )
    }

    const [editTodo, setEditTodo] = useState('')

    const editTodoItem = (item) => {

        dispatch(
            {
                type: EDIT_TODO,
                payload: { ...item, todoName: editTodo.trim() }
            }
        )

        toggleItemEdit(item)
    }

    const deleteTodoItem = (item) => {

        dispatch(
            {
                type: DELETE_TODO,
                payload: item
            }
        )
    }

    return (

        <div

            className={item.favorite

                ? 'todoitem__main favorite'
                : 'todoitem__main'}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div>

                        <div
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                            onClick={() => toggleItemDone(item)}
                        >

                            <i className={!item.done

                                ? "fa-regular fa-square fa-lg"
                                : 'fa-regular fa-square-check fa-lg'}
                            />

                            <h1
                                className={item.done ? 'done' : 'undone'}>
                                {item.todoName}

                            </h1>

                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <i className="fa fa-star fa-lg" aria-hidden="true" style={item.favorite ? { color: 'orange', transition: '150ms ease' } : { color: '#ccc', transition: '150ms ease' }}
                            onClick={() => toggleItemFav(item)}
                        />
                        <i className="fas fa-edit fa-lg" style={{ color: 'blue' }}
                            onClick={() => toggleItemEdit(item)} />

                        <i className="fa-solid fa-trash fa-lg" aria-hidden="true" style={{ color: 'red' }}
                            onClick={() => deleteTodoItem(item)} />
                    </div>
                </div>

                <div>
                    <br />
                    <form
                        type='submit'
                        style={{ margin: '0 0 0px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                        onSubmit={(e) => {
                            e.preventDefault()
                            editTodoItem(item)
                        }}
                    >

                        {item.edit && (

                            <div className='todoItem__editBlock' style={{ transition: '900ms ease' }}>

                                <div>
                                    <input

                                        id='standartInput'
                                        type="text"
                                        defaultValue={item.todoName}
                                        onChange={e => setEditTodo(e.target.value)}
                                        style={{ padding: '0 5px 0 5px', margin: '0 0 10px 0' }}
                                    />
                                </div>

                                <div>
                                    <i className="fa fa-check fa-lg" aria-hidden="true" style={{ color: 'green' }}
                                        type='submit'
                                        onClick={() => editTodoItem(item)}
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
