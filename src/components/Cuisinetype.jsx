import React, {useState} from 'react'
import "../styles/cuisines.css"

const Cuisinetype = ({formvalues, setFormvalues, onClick}) => {
    const [openMore, setOpenMore] = useState(false)
    const [input, setInput] = useState()
  return (
    <div className="center-custom">
        <p className="major-txt">What cuisine are you looking for?</p>
        <div className="multiple-values">
            <div onClick={()=>{ formvalues.cuisine.length < 2?
                setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, "latin America"]})
           :
                setFormvalues({...formvalues, cuisine: [formvalues.cuisine[0] = "Latin America"]})
            } }
            className="cuisine">
                <div className="ab-circle"></div>
                <p>Italian</p>
            </div>
            <div onClick={()=> {formvalues.cuisine.length < 2?
                setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, "French"]})
           :
                setFormvalues({...formvalues, cuisine: [formvalues.cuisine[0] = "French"]})
            }}
            className="cuisine">
                <div className="ab-circle"></div>
                <p>French</p>
            </div>
            <div onClick={()=> {formvalues.cuisine.length < 2?
                setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, "Asian"]})
           :
                setFormvalues({...formvalues, cuisine: [formvalues.cuisine[0] = "Asian"]})
            }}
            className="cuisine">
                <div className="ab-circle"></div>
                <p>Asian</p>
            </div>
            <div onClick={()=> formvalues.cuisine.length < 2?
                setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, "African"]})
           :
                setFormvalues({...formvalues, cuisine: [formvalues.cuisine[0] = "African"]})
            }
           
            className="cuisine">
                <div className="ab-circle"></div>
                <p>African</p>
            </div>
            <div onClick={()=> formvalues.cuisine.length < 2?
                setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, "latin America"]})
           :
                setFormvalues({...formvalues, cuisine: [formvalues.cuisine[0] = "Latin America"]})
            }
            className="cuisine">
                <div className="ab-circle"></div>
                <p>Latin America</p>
            </div>
            <div onClick={()=> setOpenMore(true)} className="cuisine">
               More
            </div>
        </div>
         { openMore &&<>
                    <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
                    <button onClick={()=> {
                        setFormvalues({...formvalues,cuisine: [...formvalues.cuisine, input]})
                        setOpenMore(false) }}>Submit</button>
                </>}
        
        <p>{ formvalues.cuisine[0] !== undefined &&
        `Selected: ${formvalues.cuisine[0]}, ${formvalues.cuisine[1]}`
        }</p>
        <button onClick={onClick} className="custom-contd">Continue</button>
    </div>
  )
}

export default Cuisinetype