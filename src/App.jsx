import { useState } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Model from './components/Model'
import Values from './components/Values'
import Footer from './components/Footer'
import Questions from './components/Questions'
//import './App.css'

function App() {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
    
      <Highlights/>
      <Model/>
      <Values/>
      <Questions/>
      <Footer/>

    </main>
  )
}

export default App
