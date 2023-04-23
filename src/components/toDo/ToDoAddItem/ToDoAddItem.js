import { useState } from "react"
import './ToDoAddItem.css'

const ToDoAddItem = ({addTask}) => {
    const [userTask, setUserTask] = useState ('');
    return(
        <div className="flex justify-between items-center lg:w-input h-14 mt-8 mb-12 border rounded-lg" >
            <input className="h-11 m-5 w-3/5 p-2 outline-none border-none focus:ring-0"
                type= "text"
                value={userTask}
                onChange={e => setUserTask(e.currentTarget.value)}
                placeholder="Add new list item"
            />
            <button className="bg-mavi text-white h-11 px-6 lg:py-3 m-1.5 rounded" 
                onClick={e => {
                    addTask(userTask)
                    setUserTask('')
                }}
            >
               Add
            </button>
        </div>
    )
}

export default ToDoAddItem;