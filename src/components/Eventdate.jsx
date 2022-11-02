import React, { useState} from 'react'
import { AiFillCalendar } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import "../styles/eventdate.css"

const Eventdate = ({formvalues, setFormvalues, onClick}) => {
  return (
    <div className="center-custom">
        <p className="major-txt">Event Date</p>
        <form className="eventdateform">        
        <p className="errors">{ formvalues.eventDate.split("-").join(",") < 
        `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}` &&
        "Please input a valid Date"}  
        </p>     
                <div className="event-div">
                    <AiFillCalendar className="eventicon"/>
                    <input type="Date" onChange={(e)=>setFormvalues({
                        ...formvalues, eventDate: e.target.value
                    })}/>
                </div>

                <div className="event-div">
                    
                    <BiTime className="eventicon"/>
                    <input type="time" onChange={(e)=>setFormvalues({
                        ...formvalues, eventTime: e.target.value
                    })}/>
                </div>
             
        </form>
        <button onClick={onClick}
        disabled={!formvalues.eventDate || !formvalues.eventTime}
        className="custom-contd">Submit</button>
    </div>
  )
}

export default Eventdate