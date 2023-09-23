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
import Job from './Components/Jobs/Job'
import JobsForm from './Components/Jobs/JobsForm'
import OurMission from './Components/OurMission/OurMission'
import Courses from './Components/Courses/Courses'
import Data from './Components/Home/Data'
import Calendar from './Components/Home/Calendar'
import Contact from './Components/Contact/Contact'
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
          <Route element={<Job/>} exact path='/jobs'/>
          <Route element={<JobsForm/>} exact path='/jobform'/>
          <Route element={<OurMission/>} exact path='/mission'/>
          <Route element={<Courses/>} exact path='/courses'/>
          <Route element={<Calendar/>} exact path='/events'/>
          <Route element={<Contact/>} exact path='/contact'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
