import { useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Fotter'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App
