import React from 'react'
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Contact from "../components/Contact";
import LoadingAnimation from '../components/LoadingAnimation';


const HomePage = () => {
  return (
    <div>
      {/* <LoadingAnimation/> */}
       <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    
    </div>
  )
}

export default HomePage
