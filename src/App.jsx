import { useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Fotter'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
