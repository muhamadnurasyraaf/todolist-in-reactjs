import "./ds.css";

export const Task = (props)=>{
    return (
        <div className="task">
            <p>{props.taskName}</p>
            <button onClick={props.completeTask}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>delete</button>
        </div>
    );
}