import React from 'react'

const StoveType = ({formvalues, setFormvalues, page, setPage}) => {
  return (
    <div className="center-custom">
       <p className="major-txt">What type of stove do you have?</p>
    <div className="sm-div">
       
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({ ...formvalues, stoveType: "electrical"})
          setPage(page+1)
        }}>Electrical</span>
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({ ...formvalues, stoveType: "induction"})
          setPage(page+1)
        }}>Inductions</span>
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({ ...formvalues, stoveType: "gas"})
          setPage(page+1)
        }}>Gas</span>
    </div>
    </div>
  )
}

export default StoveType