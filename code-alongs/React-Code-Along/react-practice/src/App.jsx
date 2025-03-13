import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'

export default function App() {
  

  return (
    <div className="container">
      <Header/>
      <Body/>
    </div>  
  )
}

