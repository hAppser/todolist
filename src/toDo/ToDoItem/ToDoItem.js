import React from "react";
import "./ToDoItem.css"

const ToDoItem = ({completed, description, handleChange, deleteItem}) => {
    const resolvedClass = {
        textDecoration : 'line-through'
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
                onChange={handleChange}
                defaultChecked={completed}
            />
            <p className="description" 
                style={completed == true ? resolvedClass : {}}>
                {description}
            </p>
            <div 
                className="todo-delete"
                onClick={deleteItem}
            >
                x
            </div>
        </div>
    )
}

export default ToDoItem;