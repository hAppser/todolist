import React from "react";
import "./ToDoItem.css"

const ToDoItem = ({id,completed, description, handleChange, deleteItem}) => {
    const resolvedClass = {
        textDecoration : 'line-through',
        color : '#8F98A8',
    }
    return (
        <div className="todo-item flex pb-6 pl-5" >
            <div className="hover:text-hovered_checkbox">
                <input type="checkbox" id={"checkbox"+id} name={"checkbox"+id} value="" className="w-8 h-8 cursor-pointer outline-none border-checkbox rounded-full text-focused_checkbox bg-gray-100 focus:ring-white hover:border-hovered_checkbox/[.15] text-xs" 
                    onChange={handleChange}
                    defaultChecked={completed}
                />
                <label htmlFor={"checkbox"+id} className="description ml-4 cursor-pointer " 
                    style={completed == true ? resolvedClass : {}}>
                    {description}
                </label>
            </div>
            <div 
                className="todo-delete cursor-pointer mt-1 ml-5"
                onClick={deleteItem}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 hover:text-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>


            </div>
        </div>
    )
}

export default ToDoItem;