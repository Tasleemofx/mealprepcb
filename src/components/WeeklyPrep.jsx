import React, {useState} from 'react'
import "../styles/weeklyprep.css"

const WeeklyPrep = ({formvalues, setFormvalues, onClick}) => {
  const [openOthers, setOpenOthers] = useState(false)
  return (
    <div className="center-custom">
        <p className="major-txt">Weekly Meal Prep</p>
        <div className="btn-div">
            <button onClick={()=> setFormvalues({...formvalues, days: 1})}
            className="weekly-btn">1 visit weekly</button>
            <button onClick={()=> setFormvalues({...formvalues, days: 2})}
            className="weekly-btn">2 visits weekly</button>
            <button onClick={()=> setOpenOthers(true)}
            className="weekly-btn">Others</button>
        </div>
        { openOthers  &&
        <select onChange={(e)=> setFormvalues({...formvalues, days:e.target.value})}
        className="time-select">
            <option value="None" default>Select the number of days for weekly visit</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
        </select>
        }
        <p>{`Selected: ${formvalues.days} days weekly `}</p>
        <button onClick={onClick} className="custom-contd">Continue</button>
    </div>
  )
}

export default WeeklyPrep