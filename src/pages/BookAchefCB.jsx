import React, {useState} from 'react'
import axios from "axios"
import { BiArrowBack } from "react-icons/bi"
import ChefDelivery from '../components/ChefDelivery';
import LandingCustom from '../components/LandingCustom';
import Locationpage from '../components/Locationpage';
import MonthlyPrep from '../components/MonthlyPrep';
import Attendeesform from '../components/Attendeesform';
import Needfor from '../components/Needfor';
import WeeklyPrep from '../components/WeeklyPrep';
import "../styles/mealprepcb.css"
import Mealtype from '../components/Mealtype';
import Cuisinetype from '../components/Cuisinetype';
import AnyAllergy from '../components/AnyAllergy';
import Kitchenconfig from '../components/Kitchenconfig';
import Allergytype from '../components/Allergytype';
import StoveType from '../components/StoveType';
import NumberofStove from '../components/NumberofStove';
import Haveoven from '../components/Haveoven';
import Eventdate from '../components/Eventdate';
import CustomSuccess from '../components/CustomSuccess';
const BookAchefCB = () => {
  const [page, setPage] = useState(1)
  const [formvalues, setFormvalues] = useState({
    location: "",
    prep:"",
    days: 1,
    service: "",
    children: 1,
    teens: 1,
    adults: 1,
    meal: "",
    cuisine: [],
    dietary: false,
    restriction: "",
    other_info: "",
    stoveType: "",
    stoveTops: "",
    haveOven: false,
    eventDate:"",
    eventTime:"",
    serviceCat: "MP"
  })
  const barNum =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <main className="custom-bookings">
      <nav>
      { barNum.map((item,i)=>{
        return(<div className={ i < page? "col-bar":"white-bar"} key={i}>
        </div>)
      })}
      </nav>
      <section>
        { page !== 16 &&
          <BiArrowBack className="BckArrow" onClick={()=> setPage(page-1)}/>
        }
        {page === 1? <LandingCustom onClick={()=> setPage(2)}/>
        : page === 2? <Locationpage formvalues={formvalues} setFormvalues={setFormvalues}
        onClick={()=> setPage(page+1)}/>
        : page === 3? <Needfor formvalues={formvalues} setFormvalues={setFormvalues}
        page={page} setPage={setPage}/>
        : page === 4 && formvalues.prep === "weekly"? 
        <WeeklyPrep formvalues={formvalues} setFormvalues={setFormvalues} 
        onClick={()=> setPage(page +1)}/>
        : page === 4 && formvalues.prep === "monthly"? 
        <MonthlyPrep formvalues={formvalues} setFormvalues={setFormvalues}
        onClick={()=> setPage(page +1)}/>
      : page === 5? <ChefDelivery formvalues={formvalues} setFormvalues={setFormvalues}
      setPage={setPage} page={page} />
      :page === 6? <Attendeesform formvalues={formvalues} setFormvalues={setFormvalues}
      onClick={()=> setPage(page+1)}/>
      :page === 7? <Mealtype formvalues={formvalues} setFormvalues={setFormvalues}
      setPage={setPage} page={page} />
      // Cuisine type's logic is not done yet
      :page === 8? <Cuisinetype formvalues={formvalues} setFormvalues={setFormvalues}
      onClick={()=> setPage(page+1)}/>
      // More logic unfinished
      :page === 9? <AnyAllergy formvalues={formvalues} setFormvalues={setFormvalues}
      page={page} setPage={setPage}/>
      :page === 10? <Allergytype formvalues={formvalues} setFormvalues={setFormvalues}
      onClick={()=> setPage(page+1)}/>
      :page ===11? <Kitchenconfig formvalues={formvalues} setFormvalues={setFormvalues}
      onClick={()=> setPage(page+1)}/>
      :page ===12? <StoveType formvalues={formvalues} setFormvalues={setFormvalues}
      page={page} setPage={setPage}/>
      :page === 13? <NumberofStove  formvalues={formvalues} setFormvalues={setFormvalues}
      page={page} setPage={setPage}/>
      :page === 14? <Haveoven formvalues={formvalues} setFormvalues={setFormvalues}
      page={page} setPage={setPage}/>
      :page === 15? <Eventdate formvalues={formvalues} setFormvalues={setFormvalues}
      onClick={async ()=>
        {setPage(page+1)
      await axios({
        url: "https://ikook.herokuapp.com/api/v1/ikook/Bookings/custom_booking",
        method: "POST",
        data: formvalues})}}/>
      :<CustomSuccess />
      }
        
      </section>
    </main>
  )
}

export default BookAchefCB