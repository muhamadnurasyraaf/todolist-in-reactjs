
import "./ds.css";
import "./App.css";
import { useState } from "react";
import {Task} from "./Task"
function App(){
  const [todoList,setTodoList] = useState([]);
  const [newTask,setTask]= useState("");
  const [count,setCount] = useState(0);
  const [completed,setStatus] = useState(false);

  const handlechange = (event) =>{
    setTask(event.target.value);
  } 

  const addTask = () => {
    const task ={
        // id: todoList.length === 0 ? 1:todoList[todoList.length].id + 1,
        id: todoList.length + 1,
        taskName:newTask,
        completed:completed,
    }
    setTodoList([...todoList,task]);
  }
  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task)=>task.id !== id));
  }
  
  const completeTask = (id) => {
    // setStatus(true);
    // need to update todolist like the deleteTask function do
    setTodoList(prevList => prevList.map(task => {
      if (task.id === id) {
        return {
          ...task, 
          completed: true
        };
      } else {
        return task;
      }
    }));
    setCount(count + 1);
  }    
  return(
    <div >
        <div className="addTask">
            <input type="text" onChange={handlechange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          <div className="tasks">
          Tasks : 
            {todoList.map((task, index)=>{
              if (task.completed === false) {
                return(
                  <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} completed={task.completed}/>
                );
              } else {
                return null;
              }
            
            })}
          </div>
           <div className="complete">
            Completed : {count}
            {todoList.map((task, index) => {
              // Check if task is complete, if true then return something
              if (task.completed === true) {
                return (
                  <Task taskName={task.taskName} id={task.id} completed={task.completed}/>
                );
                
              } else {
                return <div>Task {task.taskName} (ID: {task.id}) is not completed</div>;
              }
            })}
           </div>

        </div>
        
    </div>
  );
}
  

    
    

    






export default App;
