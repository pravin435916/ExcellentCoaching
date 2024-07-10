import React from 'react'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <MyNavbar/>
      <Home/>
    </>
  )
}

export default App