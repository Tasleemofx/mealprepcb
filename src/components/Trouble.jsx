import React from 'react'
import { RiMessage2Fill } from "react-icons/ri"
import "../styles/Trouble.css"

const Trouble = () => {
  return (
    <div className="trouble-banner">
        <h1>Having Troubles Booking?</h1>
        <div>
            <div className="message-div">
                <RiMessage2Fill/>
                Message us
                
            </div>
            <p>Or Call +442038078500</p>
        </div>
    </div>
  )
}

export default Trouble