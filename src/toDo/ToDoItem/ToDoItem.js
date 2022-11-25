import React from "react";
import "./ToDoItem.css"

const ToDoItem = ({completed, description}) => {
    return (
        <div className="todo-item">
            <input type="checkbox" defaultChecked={completed}/>
            <p className="description">{description}</p>
        </div>
    )
}

export default ToDoItem;