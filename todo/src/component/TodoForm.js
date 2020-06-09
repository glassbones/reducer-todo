import React, { useState, useReducer } from "react";
import { initialState, reducer } from '../reducers/reducer'
import Todo from "./Todo"

const TodoForm = () => {

    //state
    const [newTodo, setNewTodo] = useState('')
    //reducer
    const [state, dispatch] = useReducer(reducer, initialState)
    //handlers
    const handleChanges = e => setNewTodo(e.target.value)
    const handleSubmit = e => e.preventDefault();

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    value={newTodo}
                    onChange={handleChanges}
                />

                <button
                    onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo })}>
                    Add
                </button>

            </form>

            <div>

                {state.tasks.map(item => {

                    return (
                        <div
                            onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id })}
                            key={item.id}>
                            <Todo item={item} />
                        </div>
                    )
                })}


                <button onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}> Clear </button>

            </div>
        </div>
    );
}


export default TodoForm;

