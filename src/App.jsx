import { useState } from 'react'

import './App.css'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'


function App() {
  

  return (
    <>
    <Navbar/>
   <Hero />
   <Projects/>
   {/* <Education/> */}
    <Contact/>
    </>
  )
}

export default App
