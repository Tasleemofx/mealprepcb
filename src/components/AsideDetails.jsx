import React, {useState} from "react";
import CustomBooking from "./CustomBooking"
import { AiFillCloseCircle } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import axios from "axios"
import "../styles/Asidedetails.css"

const AsideDetails=({details})=>{
    const [edit, setEdit] = useState(false)
    const [openAside, setOpenAside] = useState(false)
    const [asideBtn, setAsideBtn] = useState(true)
    const [dietery_information, setDietery_information] = useState(null)
    return (
        <div className="aside-div"> 
    {   !edit?
        
        <aside className={openAside? `${details} openAside`: ` ${details} closeAside`}>
            
            <div className="Booking">
                <div className="top-aside">
                    <h3 className="aside-heading">Booking Details</h3>
                    <AiFillCloseCircle onClick={()=> {
                        setOpenAside(false)
                        setAsideBtn(!asideBtn)}
                    }/>
                </div>
                <div className="form-details">
                    <div>
                    <p className="order-info">Location</p>
                    <p>Gatwick Avenue, London UK 3HEW 3DE</p>
                    </div>
                    
                    <div className="datentime">
                    <div>
                        <p  className="order-info">Event Date</p>
                        <p>17/09/2022</p>
                    </div>
                    <div>
                        <p  className="order-info">Number of guests</p>
                        <p>6 Adults, 2kids</p>
                    </div>
                    </div>
                    <div className="btn-div">
                        <button
                        className="edit-btn"
                        onClick={
                            ()=> setEdit(!edit)
                        }>Edit</button>
                        <div className="cart-div">
                        <FaShoppingCart className="cart-lg"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <h3 className="aside-heading">Menu Details</h3>
                <p>Teriyaki-Glazed Couliflower Nuggets</p>
                <p>Diary-Free Fettuccine Alfredo with Sauteed Oyster Mushroom</p>
                <p>Basil-Berry Lemonade Sorbet</p>

                <h3 className="aside-heading">Add-On Services</h3>
                <p>1 x Pack of Chilled Drinks</p>
            </div>
            <div className="dietary">
                <h3 className="aside-heading">Dietary Restrictions</h3>
                <ul>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Glutten free</li>
                    <li>No Nuts</li>
                    <li>No Shellfish</li>
                    <li>Diary free</li>
                    <li>Halal</li>
                    <li>None</li>
                </ul>
                <textarea defaultValue="Dietary restriction not listed? Let the chef know"
                rows="4" col="6" onChange={(e)=> setDietery_information(e.target.value)}>
                    
                </textarea>
            </div>
            <div className="order-dets">
                <h3 className="aside-heading">Order Details</h3>
                <ul>
                    <li> <p>Total per person</p><span>£56</span></li>
                    <li><p>Platform fee</p><span>£20</span></li>
                    <li><p>Processing/taxes fee</p><span>£2</span></li>
                    <li><p>Subtotal</p><span>£356</span></li>
                    <li><p>TOTAL</p><span>£435</span></li>
                </ul>
               <button className="book_now" onClick={(e)=>{
                        axios.put("https://ikooknodejs.herokuapp.com/api/largeEvents/dietery_informations/2", dietery_information)
                    
               }}>BOOK NOW</button>
            </div>
        </aside>
        :
        <aside className={details}>
            
            <CustomBooking edit={edit} setEdit={setEdit} />
        </aside>
}
{asideBtn &&
    <button className="aside_btn"
    onClick={()=> {
        setOpenAside(true)
        setAsideBtn(!asideBtn)
    }}>
            <span><BsPeopleFill/> 10</span>
            <span>View Cart</span>
            <span>$550</span>
        </button>}
        </div>
    )
}
export default AsideDetails;