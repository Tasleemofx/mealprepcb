import React, { useState} from 'react'

const MonthlyPrep = ({formvalues, setFormvalues, onClick}) => {
    const [openOthers, setOpenOthers] = useState(false)
  return (
    <div className="center-custom">
        <p className="major-txt">Monthly Meal Prep</p>
        <div className="btn-div">
            <button onClick={()=> setFormvalues({...formvalues,days: 1})}
            className="weekly-btn">1 visits monthly</button>
            <button onClick={()=> setFormvalues({...formvalues,days: 2})}
            className="weekly-btn">2 visits monthly</button>
            <button onClick={()=>setOpenOthers(true)}
            className="weekly-btn">Others</button>
        </div>
        {openOthers &&
        <select onChange={(e)=> setFormvalues({...formvalues, days: e.target.value})}
        className="time-select">
          <option value="None" default>Select the number of days for monthly visit</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
        </select>
        }
        {`Selected: ${formvalues.days} visits monthly`}
        <button onClick={onClick} className="custom-contd">Continue</button>
    </div>
  )
}

export default MonthlyPrep