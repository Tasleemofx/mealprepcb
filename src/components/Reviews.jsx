import React, {useId} from "react";
import { reviewdata} from "./reviewdata"

import "../styles/Reviews.css"

const Reviews=()=>{
    const Id = useId("string")

    return(

        <div className="chef_reviews">
            <div>
                <h3>Chef Review</h3>

            </div>
            <section className="reviews_only">
                { reviewdata.map(({name, rating, description})=>{
                return(
                    <div key={Id + name} className="item-review">
                        <h3>{name}</h3>
                        <p>{rating}</p>
                        <p>{description}</p>
                    </div>
                )
            })
            }
            </section>
            <button className="more_reviews">More Reviews</button>
            </div>
    )
}

export default Reviews;