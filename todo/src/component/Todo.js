import React from "react";

const Todo = props => {

    return (
        <div style={{ textDecoration: `${props.item.completed ? "line-through" : "none"}`}}>

            <p>{props.item.task}</p>
            
        </div>
    );
};

export default Todo;

