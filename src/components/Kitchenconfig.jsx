import React from 'react'

const Kitchenconfig = ({onClick}) => {
  return (
    <div className="center-custom">
        <p className="major-txt">Let's get into your Kitchen configuration</p>
        <p>Let us know a few details about your kitchen</p>
        <button onClick={onClick} className="custom-contd">Continue</button>
    </div>
  )
}

export default Kitchenconfig