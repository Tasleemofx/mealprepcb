import React, {useId} from "react";
import {AddonData} from "./AddonData"
import { AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import "../styles/AddonServices.css"

const AddonServices =()=>{
    const Id = useId()
    return(
        <div>
            <h3>Add on services</h3>
            <div className="add-on-list">
                <AiFillLeftCircle className="direction_left"/>
                {
                AddonData.map((item, i)=>{
                    return(
                        <div key={Id + i} className="add-on">
                            <img src={item.imgurl} alt={item.name} className="addon-img"/>
                            <p>{item.name}</p>
                            <div>
                                <p>{item.price}</p>
                            </div>
                            <button className="addon_btn"> + ADD</button>
                        </div>
                    )
                })

            }
            <AiFillRightCircle className="direction_right"/>
        </div>
        </div>
    )
}

export default AddonServices;