import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Layout/Header'
import './Styles/Layout.css'
import Footer from './Components/Layout/Footer'
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route element={<Home/>} exact path='/'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
