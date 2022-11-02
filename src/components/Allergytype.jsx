import React,{ useState} from 'react'

const Allergytype = ({formvalues, setFormvalues, onClick}) => {
  const [openMore, setOpenMore] = useState(false)
  const [input, setInput] = useState()
  return (
    <div className="center-custom">
        <h1>Let the chef know the dietary restrictions and other information</h1>
        <div className="sm-div">
            <div onClick={()=> setFormvalues({...formvalues, restrictions:"vegetarian"})}
            className="sm-btn">
              <div className="ab-circle"></div>Vegetarian</div>
            <div onClick={()=> setFormvalues({...formvalues, restrictions: "Glutten"})}
            className="sm-btn">
              <div className="ab-circle"></div>Glutten</div>
            <div onClick={()=> setFormvalues({...formvalues, restrictions: "shellfish"})}
            className="sm-btn">
              <div className="ab-circle"></div>Shellfish</div>
            <div onClick={()=> setFormvalues({...formvalues, restrictions:  "nuts"})}
            className="sm-btn">
              <div className="ab-circle"></div>Nuts</div>
            <div onClick={()=> setOpenMore(true)} className="sm-btn">
              <div className="ab-circle"></div>More</div>
        </div>
        {openMore &&<>
        <textarea onChange={(e)=> setInput(e.target.value)}>
            
        </textarea>
        <button onClick={()=> setFormvalues({...formvalues, restrictions:  input})}>Add</button>
        </>
        }
        <button onClick={onClick} className="custom-contd">Continue</button>
    </div>
  )
}

export default Allergytype;