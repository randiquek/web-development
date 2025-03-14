import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

import Header from './components/Header'
import Body from './components/Body'
import Login from './components/Login'
import { SecureRoute } from './utilities/SecureRoute'

export default function App() {
  

  return (
    <UserProvider>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SecureRoute><Body /></SecureRoute>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>  
  );
}

