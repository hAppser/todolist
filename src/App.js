import './App.css';
import {useState, useEffect} from 'react';
import ToDoItem from './toDo/ToDoItem/ToDoItem'
import todosData from './toDo/todosData.js'
import ToDoAddItem from './toDo/ToDoAddItem/ToDoAddItem';


function App() {
  const initalTodos = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : todosData;
  const [tasks, setTasks] = useState(initalTodos);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleChange = id => {
    setTasks([
      ...tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : {...task})
    ])
  }
  const ids = tasks.map((task) => task.id);
  const maxId = Math.max(...ids)
  const addTask = text => {
    if (text) {
      const newItem = {
        id: maxId + 1,
        text,
        completed: false
      };
      setTasks([...tasks, newItem])
    }
  }
  const removeTask = id => {
    setTasks([...tasks.filter((task)=> task.id !== id)])
  }
  
  const activeTasks = tasks.filter(task => task.completed === false);
  const completedTasks = tasks.filter(task => task.completed === true);
  const finalTasks = [...activeTasks, ...completedTasks];
  
  return (
    <div className='App'>
      <ToDoAddItem addTask={addTask}/>
      {finalTasks.map(item => {
        return (
          <ToDoItem
            key={item.id}
            description={item.text}
            completed={item.completed}
            handleChange={()=>handleChange(item.id)}
            deleteItem={()=>removeTask(item.id)}
          />
        );
      })
      }
    </div>
  )
}

export default App;
