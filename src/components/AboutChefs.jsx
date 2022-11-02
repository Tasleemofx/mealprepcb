import React from "react";
import chefimg from "./images/chef-pic.png";
import { chefdata } from "./chefdata"
import { IoLocation } from "react-icons/io5"
import "../styles/Aboutchefs.css"

const AboutChefs=()=>{
    return(
        <section className="aboutChef">
            <div className="chef-flex">
                <div>
                    <h3>About Chef Titilayo</h3>
                    <img src={chefimg} alt="Chef"/>
                </div>
                <div>
                    <h1>Chef Titilayo John</h1>
                    <div className="dflex">
                        <IoLocation className="location_icon"/>
                        <p>London</p>
                    </div>
                    <p>
                        I trained at Tante Marie. I'm a London based, food-obsessed chef with
                        9 years of experience in restaurants, catering and private events.
                    </p>
                </div>
            </div>
            <div className="tdetails">
                {
                    chefdata.map(({id, topic, details})=>{
                        return (
                            <div className="add-details" key={id}>
                                <h1>{topic}</h1>
                                <p>{details}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AboutChefs;