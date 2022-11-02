import React from 'react'
import { MdChildCare } from "react-icons/md"
import { IoIosPeople } from "react-icons/io"
import {  IoMan } from "react-icons/io5"
import "../styles/Attendeesform.css"

const Attendeesform = ({formvalues, setFormvalues, onClick}) => {
  return (
                <div className="center-custom">
                    <div className="btn-boxes">
                        <div className="btn-box">
                            <p className="custom-label">Children
                            <MdChildCare/>
                            </p>
                            <input type="button" value="-" className="val_btn"
                            onClick={()=> {
                                if (formvalues.children > 0){
                                    setFormvalues({...formvalues, children: formvalues.children - 1 })}
                                }}/>
                            {formvalues.children}
                            <input type="button" value="+" className="val_btn"
                            onClick={()=> setFormvalues({...formvalues, children: formvalues.children + 1 })}/>
                        </div>
                        <div className="btn-box">
                            <p className="custom-label">Teens
                            <IoMan/></p>
                            <input type="button" value="-" className="val_btn"
                            onClick={()=> {
                                if (formvalues.teens > 0){
                                    setFormvalues({...formvalues, teens: formvalues.teens - 1 })}
                                }}
                                    />
                            {formvalues.teens}
                            <input type="button" value="+" className="val_btn"
                            onClick={()=> setFormvalues({...formvalues, teens: formvalues.teens + 1 })}/>
                        </div>
                        <div className="btn-box">
                            <p className="custom-label">Adults
                            <IoIosPeople/></p>
                            <input type="button" value="-" className="val_btn"
                            onClick={()=> {
                                if (formvalues.adults > 0){
                                    setFormvalues({...formvalues, adults: formvalues.adults - 1 })}
                                }}/>
                            {formvalues.adults}
                            <input type="button" value="+" className="val_btn"
                            onClick={()=> setFormvalues({...formvalues, adults: formvalues.adults + 1 })}/>
                        </div>
                       
                    </div>
                     <button onClick={onClick} className="custom-contd">Continue</button>
                </div>
  )
}

export default Attendeesform