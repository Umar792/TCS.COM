import React, { useState } from 'react'
import "./Accordian.css"

const AccordianData = ({question,answer}) => {
    const [showAcc , setShowAcc] = useState(false)
    
  return (
    <div className='Accordian'>
    <div className='question'>
        <h3 onClick={()=> setShowAcc(!showAcc)}>  {question}</h3>
        <p onClick={()=> setShowAcc(!showAcc)}>{showAcc ?"-" : "+"}</p>
    </div>
     {
        showAcc && <div className='menus_accordian'>
        <ul>
         {answer.map(answerItem => (
           <li key={answerItem}>{answerItem}</li>
         ))}
       </ul>
        </div>
     }
    </div>
  )
}

export default AccordianData
