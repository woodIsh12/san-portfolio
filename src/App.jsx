import { useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Fotter'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
