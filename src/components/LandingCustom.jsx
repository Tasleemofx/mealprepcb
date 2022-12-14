import React from 'react'
import avatar from "../components/images/doodle-avatar.svg"


const LandingCustom = ({onClick}) => {
  return (
        <div className="center-custom">
            <img src={avatar} alt="doodle-avatar"/>
            <p className="landing-bgtxt">Find a Private Chef</p>
            <p className="landing-smtxt">Few details from you will help us find you the perfect Chef for your Meal Prep</p>
            <button onClick={onClick} className="custom-contd">Continue</button>
        </div>
  )
}

export default LandingCustom