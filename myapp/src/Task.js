import "./ds.css";

export const Task = (props)=>{
    const taskStyle = {
        textDecoration: props.completed ? 'line-through' : 'none',
        color: props.completed ? 'gray' : 'white'
    }
    return (
        <div className="task" key={props.id} style={taskStyle}>
            <p>{props.taskName}</p>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>delete</button>
        </div>
    );
}