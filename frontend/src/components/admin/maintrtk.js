import React, { Fragment,useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../style/mainrtk.css'


const maintrtk = () => {
    return (
        <div className= "bod_rtk">
           <Link to = {"/new"} > <div className =  "a_rtk" >
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add New Employee<br/>

                </div>
            </Link>    

            <Link to = {"/emplist"} > <div className = "a_rtk1">    
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View Employee List

            </div> 
            </Link>               
                
                
            
           
            
        </div>
    )
}

export default maintrtk
