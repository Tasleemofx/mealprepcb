import React from 'react'

const NumberofStove = ({formvalues, setFormvalues, page, setPage}) => {
  return (
    <div className="center-custom">
      <p className="major-txt">How many stove tops do you have?</p>
    <div className="sm-div">
        
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({...formvalues, stoveTops: 2})
          setPage(page+1)
        }}>2 stoves</span>
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({...formvalues, stoveTops: 3})
          setPage(page+1)
        }}>3 stoves</span>
        <span className="sm-btn"
        onClick={()=>{
          setFormvalues({...formvalues, stoveTops: 4})
          setPage(page+1)
        }}>4 stoves</span>
    </div>
  </div>
  )
}

export default NumberofStove