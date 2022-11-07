import React from 'react'
import cooking from "./images/cooking.png"
import { MdDeliveryDining } from "react-icons/md"
import "../styles/chefdelivery.css"

const ChefDelivery = ({formvalues, setFormvalues, page, setPage}) => {
  return (
    <div className="center-custom">
        <p className="major-txt">How do you want the chef to prepare your meal?</p>
        <div className="btn-boxes">
            <div onClick={()=> {
              setFormvalues({...formvalues, service: "Physical"})
              setPage(page + 1)
            }}
            className="chef-btn">
                <img src={cooking} alt="cooking"/>
                <p>Physical</p>
            </div>
            <div onClick={()=> {
              setFormvalues({...formvalues, service: "Gourmet"})
              setPage(page + 1)
            }}
            className="chef-btn">
                <MdDeliveryDining/>
                <p>Gourmet Delivery</p>
            </div>
        </div>
    </div>
  )
}

export default ChefDelivery