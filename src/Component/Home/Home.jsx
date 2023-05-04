import React from 'react'
import Hero from './Hero/Hero'
import Snapshots from './Snapshots/Snapshots'
import Question from './questions/Question'
import Blog from './Blog/Blog'
import About from './About/About'
import Wedo from './wedo/Wedo'
import Actionwe from "./action/Actionwe"
import Footer from './footer/Footer'



const Home = () => {
  return (
    <>
    <Hero/>
      <Snapshots/>
      <Question/>
      <Blog/>
      <About/>
      <Actionwe/>
      <Wedo/>
      <Footer/>
    </>
  )
}

export default Home
