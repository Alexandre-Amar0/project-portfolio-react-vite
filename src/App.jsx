import { useState } from 'react'
import Navbar from './components/sections/Navbar.jsx'
import Presentation from './components/sections/Presentation.jsx'
import Projects from './components/sections/Projects.jsx'
import About from './components/sections/About.jsx'
import Footer from './components/sections/Footer.jsx'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
