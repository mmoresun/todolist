
// importing necessary stuff: React, CSS styles, hooks, another components

import React from 'react';
import './TodoItemList.css';
import '../TodoItem/TodoItem.css';
import { useSelector } from 'react-redux';

import TodoItem from '../TodoItem/TodoItem'

const TodoItemList = ({ searchValue, favChecked, doneChecked }) => {

    // getting todos array with useSelector:

    const myTodoItems = useSelector((state) => state.todos);

    // creating search filtration: 
    // myTodoItems filtering by search value   

    const searchFilteredTodos = myTodoItems.filter(item => {

        return item.todoName.toLowerCase().includes(searchValue.trim().toLowerCase());

    })



    const doneFilteredTodos = searchFilteredTodos.filter((item) =>
        !doneChecked ? !item.done : item
    );

    const favFilteredTodos = doneFilteredTodos.filter((item) =>
        favChecked ? item.favorite : item
    );

    // making cute 'TodoItem' component from each 'searchFilteredTodos' element

    const mappedTodos = favFilteredTodos.map((item) => {

        // ======= returning list of todo items ========

        return (

            <TodoItem

                key={item.id}
                data={item}
                {...item}
            />
        );

        // ======= returning list of todo items ========
    });

    return (

        // mappedTodos is a new array of formatted <TodoItem> components, they're all covered to <div>

        <div className='todoitemlist__main'>

            <h2

                style={{
                    textAlign: "left",
                    marginLeft: "10px",
                    color: "rgba(0, 0, 0, .7)",
                    fontSize: 'medium',
                    fontWeight: '700'
                }}
            >
                Done: {myTodoItems.filter((item) => item.done).length}/{myTodoItems.length},

                {myTodoItems.filter((item) => item.favorite).length === 1

                    ? ` Favorite: ${myTodoItems.filter((item) => item.favorite).length}`
                    : ` Favorites: ${myTodoItems.filter((item) => item.favorite).length}`}

            </h2>

            {/* {mappedTodos.length > 0 ? mappedTodos : 'No items'} */}
            {mappedTodos}

        </div>
    );
}

export default TodoItemList;
