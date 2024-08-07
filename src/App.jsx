import React from 'react'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Courses from './components/Courses'
import About from './components/About'
import FAQs from './components/FAQs'

function App() {
  return (
    <>
    <BrowserRouter>
      <MyNavbar/>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App