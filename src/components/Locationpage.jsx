import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import "../styles/locationpage.css"

const Locationpage = ({formvalues, setFormvalues, onClick}) => {
  return (
    <div className="center-custom">
        <p className="location-txt"> What's your Location</p>
        <form className="location-form">                
                <div className="input-div">
                  <IoLocationSharp className="location-icon"/>
                    <input type="text" value={formvalues.location} 
                    placeholder="Please enter your location" autoFocus
                    onChange={(e)=> setFormvalues({...formvalues, location: e.target.value })}/>
                </div>
            
        </form>

        <button onClick={onClick} 
        disabled={!formvalues.location}className="custom-contd">Continue</button>
    </div>
  )
}

export default Locationpage