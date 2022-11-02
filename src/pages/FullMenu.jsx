import React, {useState} from "react";
import Menus from "../components/Menus";
import Reviews from "../components/Reviews"
import Trouble from "../components/Trouble";
import AsideDetails from "../components/AsideDetails"
import BoxComponent from "../components/BoxComponent"
import AboutChefs from "../components/AboutChefs"
import Footer from "../components/Footer"
// import { useNavigate} from "react-router-dom";       activate after push
import "../styles/Fullmenu.css"
import Hero from "../components/Hero";


const FullMenu=()=>{
    const pages = ["Menus", "Reviews", "About Chef"]
    const [page, setPage] = useState(0)
    return (
        <div className="fullmenu">
            <Hero />
           <nav>
            <ul>
                <li onClick={()=> setPage(0)}>{pages[0]}</li>
                <li onClick={()=> setPage(1)}>{pages[1]}</li>
                <li onClick={()=> setPage(2)}>{pages[2]}</li>
            </ul>
           </nav>
           
           <div className="background-line">
                <div className={page === 0? "left-line": page === 1? "center-line": "right-line" }></div>
           </div>
        
           <div className="renderPage">
            {
                page===0? <Menus/>: 
                page===1? <Reviews/>:
                <AboutChefs/>
            }
           </div>
           <Trouble />
           <div className="boxflex">
                <BoxComponent bgcolor="black" heading="Can't find what you were looking for?"
                btext="Or not satisfied with the menus? Use custom booking to get exactly what you want"
                btnlabel="Custom Booking" btncolor="yellow"
                // onClick={useNavigate("/")}           activate after push
                />
                <BoxComponent
                bgcolor="#606be2" heading="Gift an Experience"
                btext="An unforgettable meal gift to family and friends cooked by a private Chef"
                btnlabel="Custom Booking" 
                // onClick={useNavigate("/")}           activate after push
                />   
           </div>
           <AsideDetails details="aside-details"/>
           <Footer />
        </div>
    )
}

export default FullMenu;