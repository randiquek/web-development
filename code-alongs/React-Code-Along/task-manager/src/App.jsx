import React, {useReducer} from 'react'
import './App.css'
import taskReducer from './reducers/taskReducer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
    const [state, dispatch] = useReducer(taskReducer, {tasks: []})  




  return (
    <div className="App">
      <div className="container">
        <h1>Task Manager</h1>
        <TaskForm dispatch={dispatch}/>

        <TaskList tasks={state.tasks} dispatch={dispatch}/>
      </div>
    </div>
  )
}

export default App
