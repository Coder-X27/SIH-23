import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header'
import './Styles/Layout.css'
import Footer from './Components/Layout/Footer'
import LandingPage from './Components/Home/LandingPage'
import ARComponent from './Components/Jobs/ArComponent'
import Login from './Components/LoginLogout/Login'
import UserReg from './Components/LoginLogout/UserReg'
import OrgReg from './Components/LoginLogout/OrgReg'
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route element={<LandingPage/>} exact path='/'/>
          <Route element={<ARComponent />} exact path='/ar' />
          <Route element={<Login/>} exact path='/login'/>
          <Route element={<UserReg/>} exact path='/reguser'/>
          <Route element={<OrgReg/>} exact path='/regorg'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
