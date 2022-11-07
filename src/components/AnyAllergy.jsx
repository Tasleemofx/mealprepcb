import React from 'react'

const AnyAllergy = ({formvalues, setFormvalues, page, setPage}) => {
  return (
    <div className="center-custom">
      <h1>Any Dietary Restrictions?</h1>
      <p>Do you have any allergies or dietary restrictions you would like the chef to know about?</p>
      <div className="sm-div">
        <div onClick={()=>{
          setFormvalues({...formvalues, dietary: true})
          setPage(page+1)}}
        className="sm-btn">Yes</div>
        <div onClick={()=>{
          setFormvalues({...formvalues, dietary: false})
          setPage(page+2)}}
        className="sm-btn">No</div>
      </div>
    </div>
  )
}

export default AnyAllergy