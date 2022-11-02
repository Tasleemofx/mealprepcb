import React from "react";
import "../styles/Boxcomponent.css"

const BoxComponent=({bgcolor, heading, btext,btnlabel, onClick, btncolor})=>{
    return(
        <div className="box-comp" style={{ background: bgcolor }}>
            <h3>{heading}</h3>
            <p>{btext}</p>
            <button onClick={onClick} style={{background: btncolor}}>{btnlabel}</button>
        </div>
    )
}

export default BoxComponent;