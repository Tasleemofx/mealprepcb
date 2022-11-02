import React, {useState, useId} from "react";
import { foodnprices } from "./data"
const FoodMenu=()=>{
    const [foodData, setFoodData] = useState(foodnprices)
    const Id = useId()
    return(
        <div>
            {
            foodData.map((item)=>{
                return(
                    <div key={Id+item.name}>
                        <h3>{item.name}</h3>
                        <div className="foodone">
                            <div>
                                <img src={item.item1.img}
                                alt={item.item1.name}
                                className="food_img"/>
                                <p>{item.item1.name}</p>
                            </div>
                            <p className="food_price">{item.item1.price}</p>
                        </div>
                        <div className="foodtwo">
                            <div>
                                <img src={item.item2.img}
                                alt={item.item2.name}
                                className="food_img"/>
                                <p>{item.item2.name}</p>
                            </div>
                            <p className="food_price">{item.item2.price}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FoodMenu;