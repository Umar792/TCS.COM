import React from 'react'
import {BsArrow90DegLeft,BsArrow90DegRight} from "react-icons/bs"
import "./Question.css"

const Question = () => {
  return (
    <div className='questions '>
      <div className='q_1'>
        <p>BUILDING COLLECTIVE KNOWLEDGE</p>
        <h3>Answer a few questions to discover a trove of insights customized for you.</h3>
        </div> 
      <div className='q_2'>
        <h3>Are you committed to transitioning your business to hybrid work?</h3>
        <div className='q_2_part'>
            <div className='q_2_icons'>
                <BsArrow90DegLeft/>
                <p>Yes</p>
            </div>
            <div className='q_2_icons'>
                <BsArrow90DegRight />
                <p>No</p>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Question
