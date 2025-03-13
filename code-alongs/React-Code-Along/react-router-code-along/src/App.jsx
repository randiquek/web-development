import { useState, useContext } from 'react'
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import { BooksProvider } from './contexts/BooksContext'
import { UserProvider } from './contexts/UserContext'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Login from './components/Login'
import SecuredComponent from './components/SecuredComponent'
import { SecureRoute } from './utilities/SecureRoute'
import NotFound from './components/NotFound'


function App() {


  return (
      <BooksProvider>
        <UserProvider>
          <Router>
          <h2><Link to="/">Books Website</Link></h2>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/secured">Secured</Link></li>
              </ul>
            </nav>
              <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/books" element={<Navigate to={"/"}/>} />
                <Route path="/books/:bookId" element={<BookDetails />} />
                <Route path="/secured" element={
                <SecureRoute component={<SecuredComponent />} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
        </UserProvider>
      </BooksProvider>
  )
}

export default App
