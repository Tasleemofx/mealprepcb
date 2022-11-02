import React from 'react'
import { ImCheckmark } from "react-icons/im"
import "../styles/customsuccess.css"
const CustomSuccess = ({onClick}) => {
  return (
    <div className="center-custom">
        <div className="success-logo">
            <ImCheckmark />
        </div>
        <div>
            <p className="major-txt">Request Submitted</p>
            <p>
                We just emailed you a summary of your order and a link to confirm it.
                Please look out for the proposals from our chefs
            </p>
        </div>
        <button onClick={onClick} className="custom-contd">Home</button>
    </div>
  )
}

export default CustomSuccess