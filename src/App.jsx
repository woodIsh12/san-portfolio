import { useState } from 'react'
import React from 'react'
import Intro from './components/Intro'
import Footer from './components/Fotter'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
