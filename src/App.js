import './App.css';
import {useState, useEffect} from 'react';
import ToDoItem from './components/toDo/ToDoItem/ToDoItem' 
import todosData from './components/toDo/todosData.js'
import ToDoAddItem from './components/toDo/ToDoAddItem/ToDoAddItem';
import Title from './components/Title/Title';

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
        id: maxId >= 0 ? maxId + 1: 1,
        text,
        completed: false
      };
      setTasks([...tasks, newItem])
    }
  }
  const removeTask = id => {
    setTasks([...tasks.filter((task)=> task.id !== id)])
  }
  const finalTasks = tasks.sort((a,b)=>{return a.completed - b.completed});

  return (
    <div className='App w-body rounded-3xl px-52 pb-12 ml-52 font-medium text-black'>
     <Title />
        <ToDoAddItem addTask={addTask}/>
      {finalTasks.map(item => {
        return (
          <ToDoItem
            key={item.id}
            id={item.id}
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
