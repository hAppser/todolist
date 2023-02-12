import { useState } from "react"
import './ToDoAddItem.css'

const ToDoAddItem = ({addTask}) => {
    const [userTask, setUserTask] = useState ('');
    return(
        <div className="newTask">
            <input
                type= "text"
                value={userTask}
                onChange={e => setUserTask(e.currentTarget.value)}
                placeholder="Задачу сюда"
            />
            <button 
                onClick={e => {
                    addTask(userTask)
                    setUserTask('')
                }}
            >
                Добавить задачу
            </button>
        </div>
    )
}

export default ToDoAddItem;