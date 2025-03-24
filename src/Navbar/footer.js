import React from 'react'
import techy from '../images/232222w.png'
import Lets from '../images/Lets Connect.png'
import devicon from '../images/linkedin1.png'
import dribble2 from '../images/dribble2.png'
import pinterest from '../images/piterest.png'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
     <img src={Lets} alt="/image" className='tech1' />
     <div className="git-links">
        <img src={techy} alt="/links"   />
        <img src={devicon} alt="/links" />
        <img src={dribble2} alt="/links" />
        <img src={pinterest} alt="/links" />
     </div>  
     <div className="lin"></div>    
     <p className='footer-p'>Copywrite 2025 All Rights Reserved By Isdorcode.</p>
    </div>
  )
}

export default Footer
