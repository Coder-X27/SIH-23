import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header'
import './Styles/Layout.css'
import Footer from './Components/Layout/Footer'
import LandingPage from './Components/Home/LandingPage'
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route element={<LandingPage/>} exact path='/'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
