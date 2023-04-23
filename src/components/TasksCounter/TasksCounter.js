import './styles.css'

const TasksCounter = props => {
    return (  
        <div className='text-footer'>
            {props.count.count} item selected
        </div>
    );
}
 
export default TasksCounter;