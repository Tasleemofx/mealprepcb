import React from "react"
import imagefile from "./images/Group 18072.svg"
import chefvatar from "./images/avatar-j.png"
import "../styles/Hero.css"

const Hero=()=>{
    
    return(
        <div className="Hero">
            <img src={imagefile} alt="hero" className="hero-img" />
            <div className="overlay">
                <div>
                    <h2>
                        Authentic Mexican-style-3-course meal
                    </h2>
                    <div>
                        <a href="">Middle Eastern</a>
                        <a href="">Modern Irish</a>
                        <a href="">Modern English</a>
                        <a href="">Roast</a>
                    </div>
                </div>
                <div className="sect">
                <div className="c-price">
                        <p className="starting-price">Starting price</p>
                        <h1>$20</h1> 
                </div>
                <div className="chef-dets">
                        <img src={chefvatar} alt="url"/>
                        <div>
                            <p>Chef Titilayo John</p>
                            <p>London   <span>4.6(23 Reviews)</span></p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;