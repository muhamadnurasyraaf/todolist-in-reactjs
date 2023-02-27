
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

  const addTask = () =>{
    const task ={
        id: todoList.length === 0 ? 1:todoList[todoList.length].id + 1,
        taskName:newTask,
        completed:completed,
    }
    setTodoList([...todoList,task]);
  }
    const deleteTask = (id) =>{
        setTodoList(todoList.filter((task)=>task.id !== id));
    }
  
  const completeTask = () =>{
    setStatus(true);
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
            {todoList.map((task)=>{
                return(
                    <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>
                );
            
            })}
          </div>
           <div className="complete">
            Completed : {count}
            {todoList.map((cpTask)=> {
           
              
            })}
           </div>
            

        </div>
        
    </div>
  );
}
  

    
    

    






export default App;
