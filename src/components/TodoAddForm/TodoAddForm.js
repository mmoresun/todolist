import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../store/todoactions';
import { v4 as uuid } from 'uuid';

import './TodoAddForm.css';

const TodoAddForm = () => {

    // initializing useDispatch

    const dispatch = useDispatch();

    // creating local state

    const [newEntry, setNewEntry] = useState('')

    const addNewEntry = (e) => {

        // preventing page reload on button clicking:

        e.preventDefault();

        // if newEntry exists (i.e. input field is not empty AND don't contain spaces):

        if (newEntry.trim().length <= 50) {

            // translate action to dispatcher:

            dispatch({

                // the action:

                type: ADD_TODO,

                // necessary data about new todo item:

                payload: {

                    todoName: newEntry.trim(), // taken from input using setNewEntry without spaces (trimmed)
                    done: false,
                    favorite: false,
                    edit: false,
                    id: uuid() // generating uniquie id with uuid()
                }
            });

            // clearing input field

            setNewEntry('');
        }

    }

    return (

        <div className='todoaddform__main'>
            <form>

                <input

                    value={newEntry} // getting value (entered text) from the input field
                    onChange={e => setNewEntry(e.target.value)} // saving value from input to local state
                    type='text'
                    placeholder='Add new entry, maximum 50 symbols' // the placeholder :)
                />

                <button
                    onClick={addNewEntry} // starting addNewEntry when clicking
                >
                    Add new todo
                </button>

            </form>

            {newEntry.trim().length > 50 && (<h1 style={{ color: 'red', fontSize: 'small', margin: '0 0 5px 0' }}>Too many symbols: {newEntry.length} instead of 50 maximum</h1>)}

        </div>
    );
}

export default TodoAddForm;
