import React from 'react'

const Haveoven = ({formvalues, setFormvalues, page, setPage}) => {
  return (
    <div className="center-custom">
        <p className="major-txt">Do you have an oven?</p>
        <div className="sm-div">
          <span className="sm-btn"
          onClick={()=>{
            setFormvalues({...formvalues, haveOven: true})
            setPage(page+1)
          }}>Yes</span>
          <span className="sm-btn"
          onClick={()=>{
            setFormvalues({...formvalues, haveOven: false})
            setPage(page+1)
          }}>No</span>
        </div>
    </div>
  )
}

export default Haveoven