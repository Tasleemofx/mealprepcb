import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

// import axios from "axios"
// import useNavigate from "react-router-dom";
import "../styles/CustomBooking.css"
import Attendeesform from "./Attendeesform";

const CustomBooking=({edit, setEdit})=>{
    const [errors, setErrors] = useState({
    })
    const [formvalues, setFormvalues] = useState({
        venue: "",
        date:"",
        children: 1,
        teens: 1,
        adults: 1
            })
    const handleClick =(e)=>{
                        e.preventDefault()
                        let currentDate=`${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`
                        let providedDate = formvalues.date.split('-').join("")
                         if(!formvalues.venue){
                            setErrors({...errors,
                            venue: "Please provide the required data" 
                            })
                        }else if(!formvalues.date){
                            setErrors({...errors,
                            date: "Please choose a valid date" 
                            })
                        }else if((providedDate -currentDate) < 1){
                             setErrors({...errors,
                            date: "The selected date has passed" 
                            })
                        }else{
                            setErrors({})
                           const config=(method, url, data)=>{
                            return{
                            url,
                            method,
                            data
                            }
                           }
                        }
                    }
    return(
        <div className="custom-booking">
            <div className="form-sm">
                <div className="Edit-head">
                    <h3>Edit Booking Details</h3>
                    <AiFillCloseCircle onClick={()=> setEdit(!edit)}/>
                </div>
                <form className="custom-form">
                    {!formvalues.venue &&<p className="errors">{errors.venue}</p>}
                    <div className="input-field">
                        <input type="text" placeholder="Gatwick Avenue, London UK 3HEW 3DE" 
                        value={formvalues.venue} onChange={(e)=>{
                            setFormvalues({...formvalues, venue: e.target.value })
                        }}/>
                    </div>
                    {<p className="errors">{errors.date}</p>}
                    <div className="input-field">
                        <input type="date" placeholder="Date of Event"
                         value={formvalues.date} onChange={(e)=>{
                            setFormvalues({...formvalues, date: e.target.value })
                         }
                        }/>
                    </div>
                    <Attendeesform formvalues={formvalues} setFormvalues={setFormvalues} />
                    <button className="save_btn"
                    onClick={(e)=>handleClick(e)}>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CustomBooking;