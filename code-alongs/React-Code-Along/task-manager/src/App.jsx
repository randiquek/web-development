import React, {useReducer, useState, useEffect} from 'react'
import './App.css'
import taskReducer from './reducers/taskReducer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { sortTasks } from './utilities/sortingUtility'

function App() {
    const initialState = {tasks: [], sortPreference: "high to low"};
    const [state, dispatch] = useReducer(taskReducer, initialState)  
    const sortedTasks = sortTasks(state.tasks, state.sortPreference);

  
  useEffect(() => {

      fetch("http://localhost:8080/tasks",
          {
            method: "GET",
            headers: {"Content-Type": "application/json"},
          }).then(response => response.json())
          .then((data) => {
            console.log(data);
            dispatch({type: "ADD_TASKS", payload: data})
          })


  }, []);

  
  return (
    <div className="App">
      <div className="container">

        <h1>Task Manager</h1>
        <TaskForm dispatch={dispatch}/>
        {state.tasks.length > 0 && (
             <div className="results"> 
                <h2>All Tasks</h2>
                <select value={state.sortPreference} onChange={ e => dispatch({type:"SET_SORTING", payload: e.target.value})}>
                    <option value="high to low">Priority: High to Low</option>
                    <option value="low to high">Priority: Low to High</option>
                    <option value="newest to oldest">Date Created: Newest to Oldest</option>
                    <option value="oldest to newest">Date Created: Oldest to Newest</option>

                </select>
                <TaskList tasks={sortedTasks} dispatch={dispatch}/>
             </div>
        )}
       
      </div>
    </div>
  )
}

export default App
