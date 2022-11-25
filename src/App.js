import './App.css';
import {useState} from 'react';
import ToDoItem from './toDo/ToDoItem/ToDoItem'
import todosData from './toDo/todosData.js'


function App() {
  const [tasks, setTasks] = useState(todosData);
  const handleChange = id => {
    const index = tasks.map(item => item.id).indexOf(id);
    console.log(tasks);
    setTasks(() => {
      tasks[index].completed = true;
      return [...activeTasks, ...completedTasks]
    })
  }

  const activeTasks = tasks.filter(task => task.completed === false);
  const completedTasks = tasks.filter(task => task.completed === true);

  const finalTasks = [...activeTasks, ...completedTasks].map(item => {
    return (
      <ToDoItem
        key={item.id}
        description={item.text}
        completed={item.completed}
        handleChange={()=>handleChange(item.id)}
      />
    );
  });
  
  return (
    <div className='App'>
      {finalTasks}
    </div>
  )
}

export default App;
