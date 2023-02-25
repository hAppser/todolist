import './App.css';
import {useState, useEffect} from 'react';
import ToDoItem from './components/toDo/ToDoItem/ToDoItem' 
import todosData from './components/toDo/todosData.js'
import ToDoAddItem from './components/toDo/ToDoAddItem/ToDoAddItem';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';


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
  const clearTasks = () => {
    setTasks([])
  }
  const sortTasks = (a,b) => a.completed - b.completed
  const finalTasks = tasks.sort(sortTasks);

  return (
    <div className='App w-10/12 lg:w-body rounded-3xl lg:px-52 md:pb-12 lg:ml-52 mx-5 max-md:text-2xl font-medium text-black'>
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
      <Footer 
        count={finalTasks.length} 
        clearTasks={()=>clearTasks()}
      />
    </div>
)
}

export default App;
