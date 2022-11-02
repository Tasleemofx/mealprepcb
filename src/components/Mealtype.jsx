import React from "react";
import { RiCupFill } from "react-icons/ri"
import { GiCoffeeCup } from "react-icons/gi"
import { MdDinnerDining,MdBrunchDining, MdLunchDining } from "react-icons/md"

const Mealtype=({formvalues, setFormvalues, page, setPage})=>{
    return(
        <div className="center-custom">
            <h1>What meal type would you like to book the chef for?</h1>
            <div className="multiple-values">
                <div onClick={()=> {
                    setFormvalues({...formvalues, meal: "Breakfast"})
                    setPage(page+1)}}
                className="custom-value">
                    <div className="ab-circle"></div>
                    <RiCupFill/>
                    <p>Breakfast</p>
                </div>
                <div onClick={()=> {
                    setFormvalues({...formvalues, meal: "Afternoon tea"})
                    setPage(page+1)}}
                className="custom-value">
                    <div className="ab-circle"></div>
                    <GiCoffeeCup/>
                    <p>Afternoon Tea</p>
                </div>
                <div onClick={()=> {
                    setFormvalues({...formvalues, meal: "Dinner"})
                    setPage(page+1)}}
                className="custom-value">
                    <div className="ab-circle"></div>
                    <MdDinnerDining/>
                    <p>Dinner</p>
                </div>
                <div onClick={()=> {
                    setFormvalues({...formvalues, meal: "Brunch"})
                    setPage(page+1)}}
                className="custom-value">
                    <div className="ab-circle"></div>
                    <MdBrunchDining/>
                    <p>Brunch</p>
                </div>
                <div onClick={()=> {
                    setFormvalues({...formvalues, meal: "Lunch"})
                    setPage(page+1)}}
                className="custom-value">
                    <div className="ab-circle"></div>
                    <MdLunchDining/>
                    <p>Lunch</p>
                </div>
            </div>
        </div>
    )
}

export default Mealtype;