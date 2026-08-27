import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Persona from "./components/Persona";
import Solution from "./components/Solution";
import Experience from "./components/Experience";
import Innovation from "./components/Innovation";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-hidden bg-[#070a12] text-white">
      <Navbar />
      <Hero />
      <Research />
      <Persona />
      <Solution />
      <Experience />
      <Innovation />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
