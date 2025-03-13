import React, {useReducer, useState, useEffect, useContext} from 'react'
import './App.css'
import taskReducer from './reducers/taskReducer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { sortTasks } from './utilities/sortingUtility'
import {getTasks} from './utilities/apiUtilities'

import UserContext from './context/UserContext'
import ThemeContext from './context/ThemeContext'
import { ThemeProvider } from './context/ThemeProvider'

function App() {
    const initialState = {tasks: [], sortPreference: "high to low"};
    const [state, dispatch] = useReducer(taskReducer, initialState)  
    const sortedTasks = sortTasks(state.tasks, state.sortPreference);

    const {theme, toggleTheme} = useContext(ThemeContext);

    const userInfo = {
      username: "Randi",
      isAdmin: true,
    }
  
  useEffect(() => {

          getTasks().then((data) => {
          console.log(data);
          dispatch({type: "INIT_TASKS", payload: data})
          })


  }, []);

  
  return (
    <ThemeProvider>
    <UserContext.Provider value={userInfo}>
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
    </UserContext.Provider>
    </ThemeProvider>
  )
}

export default App
