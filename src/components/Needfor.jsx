import React from 'react';
import { BiDish } from "react-icons/bi"
import "../styles/needfor.css"

const prepfor = ({formvalues, setFormvalues, page, setPage}) => {
    
  return (
    <div className="center-need">
        <div className="need weekly" onClick={()=> {
          setFormvalues({...formvalues, prep:"weekly"})
          setPage(page+1)
      }}>
            <BiDish/>
            <p>Weekly Prep</p>
        </div>
        <div className="need monthly" onClick={()=> {
          setFormvalues({...formvalues, prep:"monthly"})
          setPage(page+1)
        }}>
            <BiDish/>
            <BiDish/>
            <BiDish/>
            <p>Monthly Prep</p>
        </div>
    </div>
  )
}

export default prepfor