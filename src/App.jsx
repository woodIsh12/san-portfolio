import { useRef, useState } from 'react'
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

  const resume = useRef(null);
  const skills = useRef(null);
  const home = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef)=>{
      window.scrollTo({top:elementRef.current.offsetTop,
      behavior: 'smooth'})
  }

  return (
    <div className="App">
      <NavBar scrollToSection={scrollToSection}  skills={skills} home={home} projects={projects} resume={resume}/>
      <Intro />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <About resume={resume}/>
    </div>
  )
}

export default App
