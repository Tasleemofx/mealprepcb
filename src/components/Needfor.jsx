import React from 'react';
import cooking from "./images/cooking.png"
import "../styles/needfor.css"

const prepfor = ({formvalues, setFormvalues, page, setPage}) => {
    
  return (
    <div className="center-need">
        <div className="need weekly" onClick={()=> {
          setFormvalues({...formvalues, prep:"weekly"})
          setPage(page+1)
      }}>
            <img src={cooking} alt="cooking"/>
            <p>Weekly Prep</p>
        </div>
        <div className="need monthly" onClick={()=> {
          setFormvalues({...formvalues, prep:"monthly"})
          setPage(page+1)
        }}>
            <img src={cooking} alt="cooking"/>
            <img src={cooking} alt="cooking"/>
            <img src={cooking} alt="cooking"/>
            <p>Monthly Prep</p>
        </div>
    </div>
  )
}

export default prepfor