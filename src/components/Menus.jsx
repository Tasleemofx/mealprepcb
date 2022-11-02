import React, {useState} from "react";
import AddonServices from "./AddonServices";
import FoodMenu from "./FoodMenu";

import "../styles/Menus.css"

const Menus=()=>{
    const [disable, setDisable] = useState(true)
    
    return (
        <div className="menus">
            <h3>Choose your Menu</h3>
            <p>Listed below are the various menus available</p>
            <div className="y-btns">
            <button  disabled={disable}
            className="menutype-btn"
            onClick={()=>{
                 if(!disable){setDisable(!disable)}}}
            >Sharing Platter</button>
            <button disabled={!disable}
            className="menutype-btn"
            onClick={()=>{
                if(disable){
                     setDisable(!disable)}}}
            >Plated</button>
            </div>
            <FoodMenu />
            <AddonServices />
        </div>
    )
}

export default Menus;