import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_image'>
        <img src='./logo.PNG' alt=''/>
        </div>
        <div className="foter_box">
            <p>Privacy Notice</p>
            <p>Security Policy</p>
        </div>
        <div className="foter_box">
            <p>Cookie Policy</p>
            <p>Customize cookies</p>
        </div>
        <div className="foter_box">
            <p>Disclaimer</p>
        </div>
        <div className="foter_box">
            <p>More +</p>
        </div>
    </div>
  )
}

export default Footer
