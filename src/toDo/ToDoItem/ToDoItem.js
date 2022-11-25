import React from "react";
import "./ToDoItem.css"

const ToDoItem = ({completed, description, handleChange}) => {
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
        </div>
    )
}

export default ToDoItem;