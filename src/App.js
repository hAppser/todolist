import './App.css';
import ToDoItem from './toDo/ToDoItem/ToDoItem'
import todosData from './toDo/todosData.js'

function App() {
  const todoItems = todosData.map(item => {
    return (
      <ToDoItem
      key = {item.id}
      description = {item.text}
      completed = {item.completed}
      />
    );
  });
  return (
    <div className='App'>
      {todoItems}
    </div>
  )
}

export default App;
